import express from 'express';
import { getHtml, getTwitterCount } from './lib/scraper';
import cors from 'cors';
import db from './lib/db';
import './lib/cron';
import {uniqueVal} from './lib/uniqueValue';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scrapping!!!');
  ``;
  const [tCount] = await Promise.all([getTwitterCount()]);
  res.json({ tCount });
});

app.get('/data', (req, res, next) => {
  //get scrape data
  const {twitters} = db.value();
  // filter for only unique val
  const uniqueCount = uniqueVal(twitters)

  //response json
    res.json({ uniqueCount, twitters });

});

app.listen('6767', () => {
  console.log(`app runing on port http://localhost:6767`);
});
