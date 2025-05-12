#!/bin/bash
docker build -t trustmeet .

docker stop trustmeet-container 2>/dev/null || true
docker rm trustmeet-container 2>/dev/null || true

docker run -d --name trustmeet-container -p 5173:5173 trustmeet

echo "TrustMeet is running at http://localhost:5173" 