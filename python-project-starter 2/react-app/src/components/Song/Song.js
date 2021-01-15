import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Song.css";
import { getSongs } from "../../services/song";

function Song({ user }) {
  const [songs, setSongs] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getSongs(user);
      console.log("song", res);
      setSongs(res.songs);
    })();
  }, [user]);

  return (
    <div>
      <div>
        <h1 className="songtext">List of Available Songs!</h1>
        <h2 className="songsubtext">Feel Free to Add More!</h2>
        <div></div>
      </div>
      <div>
        <section>
          <div className="songlist">
            {songs &&
              songs.map((mappedSong, idx) => {
                return (
                  <>
                    <a className="songdetails" href="/songdetails">
                      {mappedSong.songName}
                    </a>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Song;
