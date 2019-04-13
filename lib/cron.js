import cron from 'node-cron';
import {tweetJob} from '../job';

cron.schedule(`*/15 * * * * *`, () => {
  console.log(`⏲️ RUNNING THE CRON`);
  tweetJob();
});