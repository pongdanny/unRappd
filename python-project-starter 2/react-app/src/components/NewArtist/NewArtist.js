import React, { useState, useEffect } from "react";
import { createArtist } from "../../services/artist";
// import "./NewArtist.css";

const ArtistForm = ({ user }) => {
  const [userId, setUserId] = useState("");
  const [songId, setSongId] = useState("");
  const [artistName, setArtistName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {})();
  }, [user]);

  const updateUserId = (e) => {
    setUserId(e.target.value);
  };

  const updateSongId = (e) => {
    setSongId(e.target.value);
  };

  const updateArtistName = (e) => {
    setArtistName(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const newArtistSubmit = async (e) => {
    e.preventDefault();
    const newArtist = await createArtist(
      userId,
      songId,
      artistName,
      description
    );
    return newArtist;
  };

  return (
    <>
      <form className="newArtistForm">
        <label className="userId">User ID</label>
        <input
          name="userId"
          placeholder="Add User ID"
          value={userId}
          onChange={updateUserId}
        />
        <label className="songId">Song ID</label>
        <input
          name="songId"
          placeholder="Add Song ID"
          value={songId}
          onChange={updateSongId}
        />
        <label className="artistName">Artist Name</label>
        <input
          name="artistName"
          placeholder="Add Artist Name"
          value={artistName}
          onChange={updateArtistName}
        />
        <label className="Description">Description</label>
        <textarea
          name="description"
          placeholder="Add Description"
          value={description}
          onChange={updateDescription}
        />
      </form>
      <button onClick={newArtistSubmit}>Submit</button>
    </>
  );
};

export default ArtistForm;
