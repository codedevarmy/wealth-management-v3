'use server';

import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function downloadImageAxios(urls: string[]): Promise<void> {
  try {
    for (const url of urls) {
      const i = urls.indexOf(url);
      await sleep(2000); // Sleep for 2 seconds between downloads
      // console.log('Downloading image from URL:', url);
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
      });

      const fileExt = url.split('.').pop()?.split('?')[0];
      // console.log('File extension:', fileExt);
      const fileName = `blog_cover_${i + 1}.${fileExt}`;

      const imageSavePath = path.join(
        process.cwd(),
        'public',
        'images',
        'blogs',
        fileName
      ); // Replace with your desired file path
      // const savePath = path.resolve(__dirname, 'axios_image.png'); // Replace with your desired file path

      const fileStream = await fs.open(imageSavePath, 'w');
      await new Promise((resolve, reject) => {
        response.data.pipe(fileStream.createWriteStream());
        response.data.on('end', resolve);
        response.data.on('error', reject);
      });
      console.log('Image downloaded successfully from URL:', url);
      continue;
    }
    return;
  } catch (error) {
    console.error('Error downloading the image:', error);
    throw error;
  }
}

export async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
    throw error;
  }
}
