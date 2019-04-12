import db from './db';

export const addTweet = tweet => {
  db.get('tweets').push({
    ...tweet,
    dateCollected: Date.now()
  }).write();
}

export const updateNext = next => {
  const prevNext = db.get('next').value();
  db.set('next', next).write();
  db.set('prevNext', prevNext).write();
}

export const getNext = () => {
  const next = db.get('next').value();
  return next;
}

export const getTweetsCount = () => {
  return db.get('tweets').size().value();
}

export const updateCount = () => {
  const count = db.get('tweets').size().value();
  db.set('count', count).write();
}