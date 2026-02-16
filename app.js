const express = require("express");
const { title } = require("node:process");
const cors = require("cors");
const router = express.Router();
const app = express();
const port = 5000;

app.use(cors());

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});

router.get("/songs", (req, res) => {
  const songs = [
    {
      title: "Uptown Funk",
      artist: "Bruno Mars",
      popularity: 10,
      genre: ["funk", "boogie"],
      releaseDate: new Date(2011, 10, 11),
    },
    {
      title: "We Found Love",
      artist: "Rihanna",
      popularity: 10,
      genre: ["r & b", "pop"],
      releaseDate: new Date(2014, 10, 31),
    },
  ];

  res.json(songs);
});

app.get("/", (req, res) => {
  res.send("<h2>Please use API for request<h2>");
});

app.use("/api", router);
