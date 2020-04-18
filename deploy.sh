#!/bin/bash -x
# deploy.sh: -*- Shell-script -*-  Deploy this website to AWS S3 via CodeCommit.
#
#  Copyright (c) 2019 Brian Fox
#  Author: Brian Fox (bfox@brianjfox.com)
#  Birthdate: Mon Mar  4 14:03:59 2019.

built_files=dist/static

function usage () {
    local exit_status="$1"
    echo "Usage:  deploy [opuslogica | staging [{ja,ko,zh}] | production [{ja,ko,zh}]"
    echo "Deploys the built website to the specified destination."
    exit $exit_status
}

if [ "$1" == "" ] || [ "$1" == "--help" ] || [ "$1" == "-h" ]; then usage 3; fi

function copy-push () {
    local gitdest="$1"
    local tempdir=$(mktemp -d)
    rsync -av --progress . "$tempdir" --exclude .git --exclude .gitignore
    pushd "$tempdir"
    #git init
    #git add .
    #git commit -m "deployment"
    #git remote add aws "$gitdest"
    #git push --force aws master
    bucket=$(echo "$gitdest" | sed 's/.*\///')
    aws s3 sync --acl public-read --delete ./dist/static/ "s3://$bucket"
    distribution=$(aws cloudfront list-distributions | jq -r --arg bucket "$bucket" '.DistributionList.Items[] | select(.Status=="Deployed") | select(.Aliases.Items[] | contains($bucket)) | .Id')
    aws cloudfront create-invalidation --distribution-id "$distribution" --paths "/*"
    popd
    rm -rf "$tempdir"
}

yarn

# Build the static site...
rm -rf ${built_files}
if [ "${#2}" == "2" ]; then
    yarn run build:static:${2}
else
    yarn run build:static
fi
(cd ${built_files};
 for file in $(echo *.html); do
     mkdir -p $(basename ${file} .html)
     cp ${file} $(basename ${file} .html)/index.html
 done;
 ln -s assets/whitepaper/whitepaper.pdf ./whitepaper.pdf)

if [ "$1" == "staging" ] && [ "${#2}" == "2" ]; then
    copy-push "ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/www.${2}.orchid.dev"
elif [ "$1" == "staging" ]; then
    copy-push 'ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/www.orchid.dev'
elif [ "$1" == "production" ] && [ "${#2}" == "2" ]; then
    copy-push "ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/www.${2}.orchid.com"
elif [ "$1" == "production" ]; then
    copy-push 'ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/www.orchid.com'
fi
