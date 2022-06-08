#!/bin/sh

# html
npx @marp-team/marp-cli@latest index.md -o index.html

# pdf
npx @marp-team/marp-cli@latest index.md -o index.pdf --allow-local-files

# watch mode
# npx @marp-team/marp-cli@latest index.md -w
