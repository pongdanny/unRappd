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
        <div>List of Available Artists!</div>
        <div>Feel Free to Add More!</div>
        <div></div>
      </div>
      <div>
        <section>
          <h1>Artists: {artist && artist[0].artistName}</h1>
        </section>
      </div>
    </div>
  );
}

export default Artist;
