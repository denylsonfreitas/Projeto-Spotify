import axios from "axios";

const { NODE_ENV } = process.env.NODE_ENV;

const URL = "https://projeto-spotify-90op.onrender.com/api";

const respArtists = await axios.get(`${URL}/artists`);
const respSongs = await axios.get(`${URL}/songs`);

export const artistArray = respArtists.data;
export const songsArray = respSongs.data;
