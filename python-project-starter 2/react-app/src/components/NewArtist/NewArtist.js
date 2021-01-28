import React, { useState, useEffect } from "react";
import { createArtist } from "../../services/artist";
import "./NewArtist.css";

const ArtistForm = ({ user }) => {
  // const [userId, setUserId] = useState("");
  // const [songId, setSongId] = useState("");
  const [artistName, setArtistName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {})();
  }, [user]);

  // const updateUserId = (e) => {
  //   setUserId(e.target.value);
  // };

  // const updateSongId = (e) => {
  //   setSongId(e.target.value);
  // };

  const updateArtistName = (e) => {
    setArtistName(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const newArtistSubmit = async (e) => {
    e.preventDefault();
    const newArtist = await createArtist(
      // userId,
      // songId,
      artistName,
      description
    );
    return newArtist;
  };

  return (
    <>
      <div className="artistpage">
        <img
          alt="artistimg"
          className="artistimg"
          src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ></img>
        <div className="addnewartist">Add a New Artist! 🎤</div>
        <form className="newArtistForm">
          <div className="artistcontainer">
            {/* <label className="userId">User ID</label>
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
          /> */}
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
      </div>
    </>
  );
};

export default ArtistForm;
