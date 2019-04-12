import {getTweets, getNextQuery, getNextOps} from '../lib/collector'
import * as helper from '../lib/dbHelper';

const getDesiredData = tweet => {
  if (tweet.truncated) {
    return {text: tweet.extended_tweet.full_text};
  } else {
    if (tweet.retweeted_status && tweet.retweeted_status.truncated) {
      return {text: tweet.retweeted_status.extended_tweet.full_text};
    } else {
      return {text: tweet.text}
    }
  }
}

const saveToDB = (error, response, body) => {
  if(error){
    console.error("Something's wrong", err);
    return;
  }
  const {results, next} = body;
  helper.updateNext(next);
  results.forEach(tweet => {
    helper.addTweet(getDesiredData(tweet));
  });
  helper.updateCount();
}

let nxt = helper.getNext();
let newRequest = getNextOps(getNextQuery(nxt));
getTweets(newRequest, saveToDB)