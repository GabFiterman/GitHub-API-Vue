#!/usr/bin/env sh

# avord on errors
set -e

# build
npm run build

# navigate into de the build
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:gabfiterman/gabfiterman.github.io.git main

cd -