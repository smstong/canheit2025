#!/bin/bash
set -e
selfDir=$(cd $(dirname $0); pwd)
cd $selfDir

GOOS=linux GOARCH=amd64 go build .
scp web_demo w0:~

# container image build
docker build -t utsso/canheit2025_demo .
if [[ X"$1" == X"prod" ]]; then
    docker push utsso/canheit2025_demo
fi