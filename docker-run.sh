#!/bin/bash

set -e

# Build kaspa-live
./docker-build.sh

# Start kaspa-live
docker-compose up -d kaspa-live

# Print logs for all services
docker-compose logs -f
