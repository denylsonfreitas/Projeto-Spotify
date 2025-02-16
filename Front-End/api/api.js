import axios from "axios";

const URL = "http://localhost:3001";

const respArtists = await axios.get(`${URL}/artists`);
const respSongs = await axios.get(`${URL}/songs`);

export const artistArray = respArtists.data;
export const songsArray = respSongs.data;
