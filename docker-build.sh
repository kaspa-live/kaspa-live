#!/bin/bash

set -e

# Verify that all the required environment variables are set
declare -A REQUIRED_VARIABLES
REQUIRED_VARIABLES["KGI_ADDRESS"]="${KGI_ADDRESS}"

REQUIRED_VARIABLE_NOT_SET=false
for REQUIRED_VARIABLE_NAME in "${!REQUIRED_VARIABLES[@]}"; do
  if [ -z "${REQUIRED_VARIABLES[$REQUIRED_VARIABLE_NAME]}" ]; then
    echo "${REQUIRED_VARIABLE_NAME} is not set";
    REQUIRED_VARIABLE_NOT_SET=true
    fi
done

if [ true = "${REQUIRED_VARIABLE_NOT_SET}" ]; then
  echo
  echo "The following environment variables are required:"
  for REQUIRED_VARIABLE_NAME in "${!REQUIRED_VARIABLES[@]}"; do
    echo "${REQUIRED_VARIABLE_NAME}"
  done
  exit 1
fi

# Build kaspa-live
NEXT_PUBLIC_KGI_ADDRESS="${KGI_ADDRESS}"
docker build -f ./Dockerfile --build-arg NEXT_PUBLIC_KGI_ADDRESS="${NEXT_PUBLIC_KGI_ADDRESS}" -t kaspa-live:latest .
