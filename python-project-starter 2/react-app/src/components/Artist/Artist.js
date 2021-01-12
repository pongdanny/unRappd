import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Artist.css";
import { getSongs } from "../../services/artist";

function Artist({ user }) {
  const [song, setArtist] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getArtists(user);
      console.log("song", res);
      setSong(res.songs);
    })();
  }, [user]);

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
