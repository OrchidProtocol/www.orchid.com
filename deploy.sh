#!/bin/bash -x
# deploy.sh: -*- Shell-script -*-  Deploy this website to AWS S3
#
#  Copyright (c) 2019 Brian Fox
#  Copyright (c) 2019-2020 Nathan Handler
#  Authors: Brian Fox <bfox@brianjfox.com>, Nathan Handler <nhandler@orchid.com>
#  Birthdate: Mon Mar  4 14:03:59 2019.


function usage () {
    local exit_status="$1"
    echo "Usage:  deploy [staging [{ja,ko,zh,id,ru,en}] | production [{ja,ko,zh,id,ru,en}]"
    echo "Deploys the built website to the specified destination."
    exit $exit_status
}

function build-site() {
    local language="$1"
    echo "Building Site..."
    yarn

    built_files=dist/static
    # Build the static site...
    rm -rf ${built_files}
    if [ -z "$language" ]; then
        yarn run build:static
    else
        yarn run build:static:${language}
    fi
    (cd ${built_files};
     for file in $(echo *.html); do
         mkdir -p $(basename ${file} .html)
         cp ${file} $(basename ${file} .html)/index.html
     done;
     ln -s assets/whitepaper/whitepaper.pdf ./whitepaper.pdf)
}

function get-distribution-id() {
    local bucket="$1"
    distribution=$(aws cloudfront list-distributions | jq -r --arg bucket "$bucket" '.DistributionList.Items[] | select(.Aliases.Items[] | contains($bucket)) | .Id')
    echo "$distribution"
}

function upload-site() {
    local bucket="$1"
    local version="$2"
    echo "Uploading Website..."
    aws s3 sync --acl public-read --delete ./public/ "s3://$bucket/$version"
}

function update-distribution() {
    local distribution="$1"
    local version="$2"
    echo "Updating CloudFront Distribution Config..."
    local config=$(aws cloudfront get-distribution-config --id "$distribution")
    local etag=$(echo "$config" | jq -r '.ETag')
    config=$(echo "$config" | jq -r --arg version "$version" '.DistributionConfig.Origins.Items[0].OriginPath = "/"+$version | del(.ETag) | .DistributionConfig')
    aws cloudfront update-distribution --id "$distribution" --distribution-config "$config" --if-match "$etag"
}

function wait-for-cloudfront() {
    local distribution="$1"
    echo "Waiting for CloudFront Distribution Deployment..."
    aws cloudfront wait distribution-deployed --id "$distribution"
}

function invalidate-cache() {
    local distribution="$1"
    echo "Invalidating CloudFront Cache..."
    aws cloudfront create-invalidation --distribution-id "$distribution" --paths "/*"
}


function main() {
    while getopts "hl:s:v:" OPTION; do
        case $OPTION in
            h)
                usage 3
                ;;
            l)
                local language=$OPTARG
                [[ ! $language =~ en|ja|ko|zh|id|ru ]] && {
                    echo "Incorrect language specified!"
                    usage 3
                }
                ;;
            s)
                local stage=$OPTARG
                [[ ! $stage =~ ^staging$|^production$ ]] && {
                    echo "Incorrect stage specified!"
                    usage 3
                }
                ;;
            v)
                local version=$OPTARG
                ;;
            *)
                echo "Incorrect options provided!"
                usage 3
                ;;
        esac
    done

    if [ -z ${stage+x} ]; then
        echo "You must specify a stage to deploy to!"
        usage 3
    fi

    echo "Language: $language"
    echo "Stage: $stage"
    echo "Version: $version"

    if [ -z ${language+x} ]; then  # If a language was NOT specified with -l
        if [ "$stage" == "staging" ]; then
            local bucket="blog.orchid.dev"
        elif [ "$stage" == "production" ]; then
            local bucket="blog.orchid.com"
        fi
    else  # A language was specified
        if [ "$stage" == "staging" ]; then
            local bucket="blog.${language}.orchid.dev"
        elif [ "$stage" == "production" ]; then
            local bucket="blog.${language}.orchid.com"
        fi
    fi

    distribution=$(get-distribution-id "$bucket")

    if [ -z ${distribution} ]; then  # If no CloudFront distribution was acquired
        echo "Failed to determine CloudFront Distribution for bucket: ${bucket}"
        exit 1
    fi

    if [ -z ${version+x} ]; then  # If no version was specified with -v
        version=$(./version.sh | cut -d' ' -f3)
        echo "Version: $version"
        build-site "$language"
        upload-site "$bucket" "$version"
    fi

    update-distribution "$distribution" "$version"
    wait-for-cloudfront "$distribution"
    invalidate-cache "$distribution"
}

main "$@"
