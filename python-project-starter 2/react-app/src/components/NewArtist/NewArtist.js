import React, { useState, useEffect } from "react";
import "./NewArtist.css";

const ArtistForm = ({ user }) => {
  const [userId, setUserId] = useState("");
  const [songId, setSongId] = useState("");
  const [artistName, setArtistName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {})();
  }, [user]);

  return (
    <>
      <form className="newArtistForm">
        <label className="userId">User ID</label>
        <textarea
          name="userId"
          placeholder="Add User ID"
          value={userId}
          onChange={setUserId}
        />
        <label className="songId">Song ID</label>
        <textarea
          name="songId"
          placeholder="Add Song ID"
          value={songId}
          onChange={setSongId}
        />
        <label className="artistName">Artist Name</label>
        <textarea
          name="artistName"
          placeholder="Add Artist Name"
          value={artistName}
          onChange={setArtistName}
        />
        <label className="Description">Description</label>
        <textarea
          name="description"
          placeholder="Add Description"
          value={description}
          onChange={setDescription}
        />
      </form>
      <button>Submit</button>
    </>
  );
};

export default ArtistForm;
