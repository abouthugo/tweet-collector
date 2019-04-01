# Tweet Collector

I didn't find any good codebase that I could understand well enough to tweak around so I had to come up with my own solution based off Twitter's API documentation and examples.

## Available Scripts

**`yarn collect`** — Collects 100 tweets and saves them on the directory "data". The query is hardcoded and should be changed in the file [index.js](src/index.js)

**`yarn test`** — Reads the saved file and iterates through the `text` or `full_text` properties of each tweet; depending whether they are truncated or not and if they are retweets.

