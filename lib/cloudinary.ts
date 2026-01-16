'use server';

import { v2 as cloudinary, ResourceApiResponse } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getResources() {
  try {
    const res = (await cloudinary.api.resources({
      // prefix: 'blog-covers/',
      type: 'upload',
      max_results: 60,
    })) as ResourceApiResponse;

    const secureUrls: string[] = [];
    res.resources.map((resource) => {
      secureUrls.push(resource.secure_url);
    });

    console.log('Secure URLs:', secureUrls);

    return res;
  } catch (error) {
    console.error('Error fetching resources from Cloudinary:', error);
    throw error;
  }
}
