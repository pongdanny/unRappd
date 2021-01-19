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
        src="https://images.unsplash.com/photo-1595491542937-3de00ac7e08a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
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
