#!/bin/bash
# deploy.sh: -*- Shell-script -*-  Deploy this website to AWS S3 via CodeCommit.
# 
#  Copyright (c) 2019 Brian Fox
#  Author: Brian Fox (bfox@brianjfox.com)
#  Birthdate: Mon Mar  4 14:03:59 2019.

# This doesn't work -- the wget fails, getting a 500 error.  I don't care.
# built_files=./dist/browser
# Because this works, and I really, genuinely, honestly do not care.
built_files=dist/static

function usage () {
    local exit_status="$1"
    echo "Usage:  deploy [opus | staging | production]"
    echo "Deploys the built website to the specified destination."
    exit $exit_status
}

if [ "$1" == "" ]; then usage 3; fi

function copy-push () {
    local gitdest="$1"
    local tempdir="../orchid-www-deploy-$$"
    rm -rf "$tempdir"
    (cd ${built_files}; cp -a . ../../"$tempdir")
    pushd "$tempdir"
    git init
    git add .
    git commit -m "deployment"
    git remote add aws "$gitdest"
    git push --force aws master
    popd
}

# Build the angular site...
# ng build --prod

# Build the static site...
DEF_OUT_DIR=${built_files} ./static-render.sh


if [ "$1" == "--help" ]; then
    usage
elif [ "$1" == "opuslogica" ]; then
    scp -rp ${built_files}/* .htaccess opuslogica.com:/www/sites/orchid.opuslogica.com/
elif [ "$1" == "staging" ]; then
    copy-push 'ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/new.orchid.com'
elif [ "$1" == "production" ]; then
    copy-push 'ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/orchid.com'
fi
