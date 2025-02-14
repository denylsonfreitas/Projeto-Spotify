import { artistArray } from "../../Front-End/src/assets/database/artists.js";
import { songArray } from "../../Front-End/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistsObj) => {
  const newArtistsObj = { ...currentArtistsObj };
  delete newArtistsObj.id;

  return newArtistsObj;
});

const newSongsArray = songArray.map((currentSongsObj) => {
  const newSongsObj = { ...currentSongsObj };
  delete newSongsObj.id;

  return newSongsObj;
});

const respArtists = await db.collection("artists").insertMany(newArtistArray);
const respSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(respArtists);
console.log(respSongs);
