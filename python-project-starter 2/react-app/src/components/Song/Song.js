import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Song.css";
import { getSongs } from "../../services/song";

function Song({ user }) {
  const [song, setSong] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getSongs(user);
      console.log("song", res);
      setSong(res.songs);
    })();
  }, [user]);

  return (
    <div>
      <div>
        <div>List of Available Songs!</div>
        <div>Feel Free to Add More!</div>
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
