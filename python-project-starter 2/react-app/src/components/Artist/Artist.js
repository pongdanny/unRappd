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
        <h1>List of Available Artists!</h1>
        <h2>Feel Free to Add More!</h2>
        <div></div>
      </div>
      <div>
        <section>
          <h1>0: {artist && artist[0].artistName}</h1>
          <h1>1: {artist && artist[1].artistName}</h1>
          <h1>2: {artist && artist[2].artistName}</h1>
          <h1>3: {artist && artist[3].artistName}</h1>
          <h1>4: {artist && artist[4].artistName}</h1>
          <h1>5: {artist && artist[5].artistName}</h1>
          <h1>6: {artist && artist[6].artistName}</h1>
          <h1>7: {artist && artist[7].artistName}</h1>
          <h1>8: {artist && artist[8].artistName}</h1>
          <h1>9: {artist && artist[9].artistName}</h1>
        </section>
      </div>
    </div>
  );
}

export default Artist;
