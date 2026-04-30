#!/bin/sh

# Install/sync dependencies whenever package.json changes
if [ ! -f "node_modules/.package-lock.json" ] || \
   [ "package.json" -nt "node_modules/.package-lock.json" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the development server
echo "Starting Quasar dev server..."
npm run dev:pwa