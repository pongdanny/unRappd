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
      <div>
        <h1 className="artisttext">List of Available Artists!</h1>
        <h2 className="artistsubtext">Feel Free to Add More!</h2>
        <div></div>
      </div>
      <div>
        <section>
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
        </section>
      </div>
    </div>
  );
}

export default Artist;
