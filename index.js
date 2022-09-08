import { load } from 'cheerio';
//import blob from 'fetch-blob';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

const response = await fetch(url);
const body = await response.text();

const $ = load(body);

async function imageSelect() {}

const memeURLs = [];

for (let i = 0; i < 10; i++) {
  memeURLs.push($('div > a > img')[i].attribs.src);
}

memeURLs.forEach((element) => imageSelect());

function callback(err, data) {
  let filename = '0[index].jpg';
  fs.writeFile(
    './rybarska/pjct-node-2-meme-scraper/memes/0[index].jpg',
    data,
    'binary',
  ),
    (err) => {
      if (!err) {
        console.log(`${filename} created successfully!`);
      }
    };
}
