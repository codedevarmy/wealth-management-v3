// 'use server';

// export async function getReviews() {
//   const placeId = process.env.GOOGLE_PLACE_ID;
//   const apiKey = process.env.GOOGLE_MAPS_API_KEY;
//   if (!placeId || !apiKey) {
//     throw new Error(`
//       Missing GOOGLE_PLACE_ID or GOOGLE_MAPS_API_KEY environment variables.
//       `);
//   }

//   // Use the "Atmosphere" fields to get reviews and ratings
//   const url = `maps.googleapis.com${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
