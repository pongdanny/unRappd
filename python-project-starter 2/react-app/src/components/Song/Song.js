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
        <h1>List of Available Songs!</h1>
        <h2>Feel Free to Add More!</h2>
        <div></div>
      </div>
      <div>
        <section>
          <div>
            {song &&
              song.map((mappedSong, idx) => {
                return (
                  <div>
                    {idx + 1} : {mappedSong.songName}
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Song;
