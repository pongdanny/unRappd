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
      setSongs(res);
    })();
  }, [user]);

  return (
    <div className="songpage">
      <img
        className="songlistimg"
        src="https://cdn.pixabay.com/photo/2014/05/22/21/46/mixing-desk-351478_960_720.jpg"
      ></img>
      <h1 className="songtext">Available Songs</h1>
      <a href="/newsong" className="songsubtext">
        Add a New Song!
      </a>
      <section className="songsection">
        <div className="songlistcontainer">
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
        </div>
      </section>
    </div>
  );
}

export default Song;
