import request from 'request';

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

const q = {
  query: process.env.QUERY,
  maxResults: 100,
}

export const requestOptions = {
  method: 'post',
  url: `https://${searchConfig['url']}${searchConfig['env']}.json`,
  oauth: searchAuth,
  json: true,
  headers: {
    'content-type': 'application/json'
  },
  body: q,
}


/**
 * Returns a new query object with an updated next parameter
 * @param {string} next a string from twitter that "paginates" a query
 */
export const getNextQuery = (next) => {
  if(next.length>1) return {...q, next};
  return {...q};
}

/**
 * Returns a new request options object with the updated body params
 * @param {*} nextQuery 
 */
export const getNextOps = nextQuery => ({...requestOptions, body: nextQuery})

/**
 * Sends a request to twitter's API given a request options encapsulated in a js object
 * @param {*} requestOps options for a request, url, method, all that stuff
 */
export const getTweets = (requestOps, cb) => {
  request.post(requestOps, cb);
}

