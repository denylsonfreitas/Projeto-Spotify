import axios from "axios";

const URL = "http://localhost:5000";

const respArtists = await axios.get(`${URL}/artists`);
const respSongs = await axios.get(`${URL}/songs`);

export const artistArray = respArtists.data;
export const songArray = respSongs.data;
