#/bin/bash
sudo docker ps --all --format "{{.ID}}" | xargs sudo docker stop
sudo docker ps --all --format "{{.ID}}" | xargs sudo docker rm
