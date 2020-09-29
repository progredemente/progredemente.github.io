#!/bin/sh
npm run build
rm -Rf docs
mv build docs
git add *
git commit -m "New post"
git push origin master