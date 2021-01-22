import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Artist.css";
import { getArtists } from "../../services/artist";

function Artist({ user }) {
  const [artist, setArtist] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getArtists(user);
      console.log("artist", res);
      setArtist(res.artists);
    })();
  }, [user]);

  return (
    <div>
      <img
        alt="artistlistimg"
        className="artistlistimg"
        src="https://images.unsplash.com/photo-1512090421650-1ba94830f7b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ></img>
      <h1 className="artisttext">Available Artists</h1>
      <a href="/newartist" className="artistsubtext">
        Don't See Your Artist? Add Them!
      </a>
      <section>
        <div className="artistlistcontainer">
          <div className="artistlist">
            {artist &&
              artist.map((mappedArtist, idx) => {
                return (
                  <a className="artistdetails" href="/artistdetails">
                    {mappedArtist.artistName}
                  </a>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artist;
