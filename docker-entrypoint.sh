#!/bin/sh
set -e
if [ -d ./prisma/migrations ]; then
  node ./node_modules/prisma/build/index.js migrate deploy
fi
exec node server.js
