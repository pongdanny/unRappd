import React, { useState, useEffect } from "react";
import { createSong } from "../../services/song";
import "./NewSong.css";

const SongForm = ({ user }) => {
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    (async () => {})();
  }, [user]);

  const updateArtistName = (e) => {
    setArtistName(e.target.value);
  };

  const updateSongName = (e) => {
    setSongName(e.target.value);
  };

  const updateAlbumName = (e) => {
    setAlbumName(e.target.value);
  };

  const newSongSubmit = async (e) => {
    e.preventDefault();
    const newSong = await createSong(artistName, songName, albumName);
    return newSong;
  };

  return (
    <>
      <img
        className="songimg"
        src="https://images.unsplash.com/photo-1520717178299-4cf2701a5bc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ></img>
      <div className="addnewsong">Add a New Song! 🎵</div>
      <form className="newSongForm">
        <div className="songcontainer">
          <label className="artistName">Artist Name</label>
          <input
            name="artistName"
            placeholder="Add Artist Name"
            value={artistName}
            onChange={updateArtistName}
          />
          <label className="songName">Song Name</label>
          <input
            name="songName"
            placeholder="Add Song Name"
            value={songName}
            onChange={updateSongName}
          />
          <label className="albumName">Album Name</label>
          <input
            name="albumName"
            placeholder="Add Album Name"
            value={albumName}
            onChange={updateAlbumName}
          />
          <button className="songsubmit" onClick={newSongSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SongForm;
