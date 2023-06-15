#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo rm package-lock.json

sudo yarn install

sudo npx pm2 reload all