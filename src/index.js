import request from 'request'
import { saveJSON } from '../lib'

// Authentication
const searchAuth = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET
  //   token: process.env.ACCESS_TOKEN,
  //   token_secret: process.env.ACCESS_TOKEN_SECRET
}

// Product Details
const searchConfig = {
  url: process.env.TWITTER_SEARCH_URL,
  env: process.env.ENV
}

const query = {
  query: 'khols lang:en',
  maxResults: 100,
}

const requestOptions = {
  url: `https://${searchConfig['url']}${searchConfig['env']}.json`,
  oauth: searchAuth,
  json: true,
  headers: {
    'content-type': 'application/json'
  },
  body: query,
}

function getTweets () {
  request.post(requestOptions, (err, response, body) => {
    if (err) {
      console.log('Something went wrong')
      console.log(err)
      console.log(response)
      return;
    }
    saveJSON(`TEST`, body)
  })
}
// console.log(requestOptions);
getTweets()
