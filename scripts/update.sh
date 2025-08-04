#!/bin/bash

export DEBIAN_FRONTEND=noninteractive
set -eu

git checkout master
git fetch origin master
git reset --hard FETCH_HEAD

sudo chown -R $USER:$USER $(pwd)

# Pull latest images
docker compose pull

# Update services using rollout strategy
docker rollout -f docker-compose.yml --wait 10 --wait-after-healthy 3 app
wait
