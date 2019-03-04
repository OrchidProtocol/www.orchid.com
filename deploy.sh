#!/bin/bash
# deploy.sh: -*- Shell-script -*-  Deploy this website to AWS S3 via CodeCommit.
# 
#  Copyright (c) 2019 Brian Fox
#  Author: Brian Fox (bfox@brianjfox.com)
#  Birthdate: Mon Mar  4 14:03:59 2019.
function usage () {
    local exit_status="$1"
    echo "Usage:  deploy [opus | staging | production]"
    echo "Deploys the built website to the specified destination."
    exit $exit_status
}

function copy-push () {
    local gitdest="$1"
    local tempdir="../55-orchid-www-86"
    rm -rf "$tempdir"
    (cd ./dist/browser; cp -a . ../../"$tempdir")
    pushd "$tempdir"
    git init
    git add .
    git commit -m "deployment"
    git remote add aws "$gitdest"
    git push --force aws master
    popd
}

if [ "$1" == "" ]; then usage 3; fi

ng build --prod

if [ "$1" == "--help" ]; then
    usage
elif [ "$1" == "opuslogica" ]; then
    scp -rp ./dist/browser/* .htaccess opuslogica.com:/www/sites/orchid.opuslogica.com/
elif [ "$1" == "staging" ]; then
    copy-push 'ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/new.orchid.com'
elif [ "$1" == "production" ]; then
    copy-push 'ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/www.orchid.com'
fi
