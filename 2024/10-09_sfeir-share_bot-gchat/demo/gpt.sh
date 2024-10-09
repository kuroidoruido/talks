#!/bin/sh


curl https://api.openai.com/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ${OPENAI_APIKEY}" \
-d '{
        "model": "gpt-4o",
        "messages": [
            {"role": "user", "content": "Raconte moi une blague en français"}
        ]
    }'