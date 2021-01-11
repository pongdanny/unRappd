import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Song.css";
import { getSongs } from "../../services/song";

function Song() {
  const [song, setSong] = useState({});
  useEffect(() => {
    (async () => {
      const res = await getSongs();
      console.log("song", res);
      setSong(res.songs);
    })();
  }, []);

  return (
    <div>
      <div>
        <div>Hey There!</div>
        <div>Email:</div>
        <div></div>
      </div>
      <div>
        <section>
          <h1>Songs: {song && song[0].songName}</h1>
        </section>
      </div>
    </div>
  );
}

export default Song;
