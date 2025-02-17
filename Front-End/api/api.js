import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env.NODE_ENV;

const URL = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";

const respArtists = await axios.get(`${URL}/artists`);
const respSongs = await axios.get(`${URL}/songs`);

export const artistArray = respArtists.data;
export const songsArray = respSongs.data;
