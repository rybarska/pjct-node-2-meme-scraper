import fs from 'node:fs';
import { ProgressBar } from '@open-tech-world/cli-progress-bar';
import { load } from 'cheerio';
import fetch from 'node-fetch';

const linkResponse = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await linkResponse.text();

const downloadImage = async (url, path) => {
  const imageResponse = await fetch(url);
  const arraybuffer = await imageResponse.arrayBuffer();
  const buffer = Buffer.from(arraybuffer);
  fs.writeFile(path, buffer, () => {});
};

const $ = load(body);

const memeURLs = [];

for (let i = 0; i < 10; i++) {
  memeURLs.push($('div > a > img')[i].attribs.src);
  await downloadImage(memeURLs[i], `./memes/${i + 1}.jpg`);
}

const pBar = new ProgressBar({ prefix: 'Downloading' });
pBar.run({ value: 0, total: 100 });
pBar.run({ value: 50, total: 100 });
pBar.run({ value: 100, total: 100, prefix: 'Download Completed!' });
