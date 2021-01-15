import React, { useState, useEffect } from "react";
import { createArtist } from "../../services/artist";
import "./NewArtist.css";

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
      <img
        className="artistimg"
        src="https://cdn.pixabay.com/photo/2014/02/11/23/34/hip-hop-264396_960_720.jpg"
      ></img>
      <div className="addnewartist">Add a New Artist! 🎤</div>
      <form className="newArtistForm">
        <div className="artistcontainer">
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
          <button className="artistsubmit" onClick={newArtistSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ArtistForm;
