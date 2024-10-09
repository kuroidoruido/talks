#!/bin/sh

curl $GCHAT_WEBHOOK \
-X POST \
-H "Content-Type: application/json; charset=UTF-8" \
-d '{
        "text": "En direct live du SFEIR Share du 09/10/2024! 🖨️"
    }'