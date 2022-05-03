#!/usr/bin/env sh
set -e

npm run build

cd build

git config --global user.email action@github.com
git config --global user.name github-actions[bot]@users.noreply.github.com

git init

git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:hono3bono3/react-practice.git main:gh-pages

cd -
