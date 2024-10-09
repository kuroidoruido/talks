import { createBot, createBotSpace } from '@anthonypena/simple-bot'
import { dispatch, googleChat } from '@anthonypena/simple-bot/emitters'
import { gpt, someData } from '@anthonypena/simple-bot/fetchers'
import { always } from '@anthonypena/simple-bot/triggers'

const jokeBot = createBot({
    name: 'Joke-Bot 🤖',
    trigger: always(),
    data: someData<{ joke: string }>({
        joke: gpt({
            messages: [{
                role: 'user',
                content: `Raconte moi une blague en français`,
            }]
        }),
    }),
    message: ({ botName, data: { joke } }) => {
        return `${joke}\n\n-- ${botName}`;
    },
    emitter: dispatch(googleChat({ spaceUrl: process.env.GCHAT_WEBHOOK }))
})

createBotSpace([
    jokeBot
], { env: process.env }).run()