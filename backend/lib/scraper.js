import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

const fs = require('fs');

async function getHtml(url) {
  const html = await axios.get('https://twitter.com/kayot7898895').then(
    response => {
      if (response.status === 200) {
        const html = response.data;
        fs.writeFile('2pac.txt', html, err => {
          if (err) throw err;
        });
        const $ = cheerio.load(html);
        const span = $('[data-nav="followers"] .ProfileNav-value');
        return span.data('count');
      }
    },
    error => console.log(err)
  );
  return html;
}

export async function getTwitterCount() {
  const html = await getHtml('https://twitter.com/kayot7898895');
  const twCount = await getHtml('https://twitter.com/kayot7898895');
  console.log(`You have ${html} tw followers`);
  return twCount;
}

export async function runCron() {
  console.log('Scrapping!!!');
  const [tCount] = await Promise.all([getTwitterCount()]);
  console.log(tCount);
  db.get('twitters')
    .push({
      date: Date.now(),
      count: tCount
    })
    .write();
  console.log('Done');
}

export { getHtml };
