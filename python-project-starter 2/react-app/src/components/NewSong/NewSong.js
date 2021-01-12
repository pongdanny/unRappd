import React, { useState, useEffect } from "react";
import { createSong } from "../../services/song";
// import "./NewSong.css";

const SongForm = ({ user }) => {
  const [artistId, setArtistId] = useState("");
  const [songName, setSongName] = useState("");
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    (async () => {})();
  }, [user]);

  const newSongSubmit = async (e) => {
    e.preventDefault();
    const newSong = await createSong(artistId, songName, albumName);
    return newSong;
  };

  return (
    <>
      <form className="newSongForm">
        <div className="artistContainer">
          <label className="artistId">Artist ID</label>
          <input
            name="artistId"
            placeholder="Add Artist ID"
            value={artistId}
            onChange={setArtistId}
          />
          <label className="songName">Song Name</label>
          <input
            name="songName"
            placeholder="Add Song Name"
            value={songName}
            onChange={setSongName}
          />
          <label className="albumName">Album Name</label>
          <input
            name="albumName"
            placeholder="Add Album Name"
            value={albumName}
            onChange={setAlbumName}
          />
        </div>
      </form>
      <button onClick={newSongSubmit}>Submit</button>
    </>
  );
};

export default SongForm;
