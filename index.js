import { load } from 'cheerio';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

const response = await fetch(url);
const body = await response.text();

let $ = load(body);

const memeURLs = [];

for (let i = 0; i < 10; i++) {
  memeURLs.push($('div > a > img')[i].attribs.src);
}
console.log(memeURLs);
