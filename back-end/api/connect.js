// JavaScript Assíncrono
// await async
//fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://leandrogomesvieira:jBljv1fERWa6EWaA@projectspotify.nn9na.mongodb.net/?retryWrites=true&w=majority&appName=ProjectSpotify";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
