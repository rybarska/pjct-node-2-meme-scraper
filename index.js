import fs from 'node:fs';
import { load } from 'cheerio';
import fetch from 'node-fetch';

const response = fetch('https://memegen-link-examples-upleveled.netlify.app/');
const body = await response.text();

const downloadImage = async (url, path) => {
  const response2 = await fetch(url);
  const arraybuffer = await response2.arraybuffer();
  const buf = Buffer.from(arraybuffer);
  fs.writeFile(buf, path, () => {});
};

const $ = load(body);

const memeURLs = [];

for (let i = 0; i < 10; i++) {
  memeURLs.push($('div > a > img')[i].attribs.src);
  await downloadImage(memeURLs[i], `./memes/0 ${i + 1}.jpg`);
  /* (err) => {
    if (!err) {
      console.log(`${filename} created successfully!`);
    } */
}
