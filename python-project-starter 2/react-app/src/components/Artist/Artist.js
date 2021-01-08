import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Artist() {
  const [artist, setArtist] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { artistId } = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      const response = await fetch(`/api/artists`);
      const artist = await response.json();
      setArtist(artist);
    };
    fetchAll();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Artist</strong> {artist.artistName}
      </li>
      <li>
        <strong>Description</strong> {artist.description}
      </li>
    </ul>
  );
}
export default Artist;
