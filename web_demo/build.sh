#!/bin/bash
set -e
selfDir=$(cd $(dirname $0); pwd)
cd $selfDir

GOOS=linux GOARCH=amd64 go build .
scp web_demo w0:~