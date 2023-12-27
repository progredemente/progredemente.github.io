#!/bin/sh
git add *
TEXT="New post"
if [ $# -gt 0 ]
then
    TEXT=$1
fi
git commit -m "$TEXT"
git push origin master