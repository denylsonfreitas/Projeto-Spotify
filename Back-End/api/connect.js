import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://denylsonfeitoza:xMl6RI1SgzEImudf@cluster0.nhj93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyProj");
