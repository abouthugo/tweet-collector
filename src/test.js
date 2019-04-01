import { readJSON } from '../lib'
import colors from 'colors'

let { results: tweets } = readJSON('data/TEST.json')

for (let tweet of tweets) {
  if (tweet.truncated) {
    console.log('Truncated text:'.yellow)
    console.log(tweet.text)
    console.log('-end'.yellow)
    console.log(tweet.extended_tweet.full_text)
    console.log('-'.repeat(100))
  } else {
    if (tweet.retweeted_status && tweet.retweeted_status.truncated) {
      console.log('Retweet truncated:'.red)
      console.log(tweet.retweeted_status.extended_tweet.full_text)
      console.log('-'.repeat(100))
    } else {
      console.log('Apparently full text:'.blue)
      console.log(tweet.text)
      console.log('-'.repeat(100))
    }
  }
}
