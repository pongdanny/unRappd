import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { createSong } from "../../services/song";
import { getArtists } from "../../services/artist";
import "./NewSong.css";

const SongForm = ({ user }) => {
  const [errors, setErrors] = useState([]);
  const [artistNames, setArtistNames] = useState("");
  const [artistId, setArtistId] = useState("");
  const [songName, setSongName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await getArtists();
      setArtistNames(res);
      console.log(res);
    })();
  }, []);

  const newSongSubmit = async (e) => {
    e.preventDefault();
    const song = await createSong(artistId, songName, albumName);
    if (!song.errors) {
      console.log("Submit successful! ", song);
      history.push("/");
    } else {
      setErrors(song.errors);
      return;
    }
  };

  const updateArtistId = (e) => {
    setArtistId(e.target.value);
  };

  const updateSongName = (e) => {
    setSongName(e.target.value);
  };

  const updateAlbumName = (e) => {
    setAlbumName(e.target.value);
  };

  return (
    <>
      <img
        alt="songimg"
        className="songimg"
        src="https://images.unsplash.com/photo-1520717178299-4cf2701a5bc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ></img>
      <div className="addnewsong">
        Add a New Song! <span role="img">🎵</span>
      </div>
      <form className="newSongForm" onSubmit={newSongSubmit}>
        <div className="songcontainer">
          <label htmlFor="artistName" className="artistName">
            Artist Name
          </label>
          <select
            name="artistName"
            type="text"
            placeholder="Add Artist Name"
            value={artistId}
            onChange={updateArtistId}
          >
            <option value={null}>Choose an Artist</option>
            {/* {artistNames &&
              artistNames.map((artistName) => (
                <option key={artistName.id} value={artistName.id}>
                  {artistName.artistName}
                </option>
              ))} */}
          </select>
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
          <input type="submit" className="songsubmit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default SongForm;
