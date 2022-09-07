import { load } from 'cheerio';
// import blob from 'fetch-blob';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

const response = await fetch(url);
const body = await response.text();

const $ = load(body);

const memeURLs = [];

for (let i = 0; i < 10; i++) {
  memeURLs.push($('div > a > img')[i].attribs.src);
}
console.log(memeURLs);

/* const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
const buffer = Buffer.from(arrayBuffer);*/
