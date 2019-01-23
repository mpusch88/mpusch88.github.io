#!/bin/bash
#set -o pipefail

if [[ ! -z $CIRCLE_PULL_REQUEST ]]
then
    echo "This is a pull request"
    echo $CIRCLE_PULL_REQUEST   
    npm run webpack
else
    echo "Not a pull request"
    npm run dist:win
fi