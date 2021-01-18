import React, { useState, useEffect } from "react";
import { createCheckin, getCheckins } from "../../services/checkin";
import { useHistory } from "react-router-dom";
import "./CheckinForm.css";
import { getSongs } from "../../services/song";

const CheckinForm = ({ user }) => {
  const [errors, setErrors] = useState([]);
  const [songNames, setSongNames] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  useEffect(() => {
    (async () => {
      const res = await getSongs(user);
      setSongNames(res.songNames);
    })();
  }, [user]);
  let history = useHistory();

  const newCheckinSubmit = async (e) => {
    console.log("this works");
    e.preventDefault();
    // const newCheckin = await createCheckin(songNames, review, rating);
    const data = new FormData();
    data.append("songNames", songNames);
    data.append("review", review);
    data.append("rating", rating);
    const checkin = await createCheckin(data);
    if (!checkin.errors) {
      console.log("Submit successful! ", checkin);
    } else {
      setErrors(checkin.errors);
      return;
    }
    console.log("Submit successful! ", checkin);
    history.push("/");
  };

  const updateSongName = (e) => {
    setSongNames(e.target.value);
  };

  const updateReview = (e) => {
    setReview(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <>
      <img
        className="checkinimg"
        src="https://cdn.pixabay.com/photo/2016/03/30/05/41/music-1290087_960_720.jpg"
      ></img>
      <div className="addnewsong">Add a New Bump! 🎵</div>
      <form
        onSubmit={newCheckinSubmit}
        encType="multipart/form-data"
        className="newCheckinForm"
      >
        <div className="checkincontainer">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <label className="songName">Song Name</label>
          <select
            name="songName"
            type="text"
            placeholder="Add Song Name"
            value={songNames}
            onChange={updateSongName}
          >
            <option value={null}>Choose a Song</option>
            {songNames &&
              songNames.map((songName) => (
                <option value={songName.song.songName}>
                  {songName.song.songName}
                </option>
              ))}
          </select>
          <label className="review">Review</label>
          <input
            name="review"
            type="text"
            placeholder="Add Review"
            value={review}
            onChange={updateReview}
          />
          <label className="rating">Rating</label>
          <input
            name="rating"
            type="text"
            placeholder="Add Rating"
            value={rating}
            onChange={updateRating}
          />
          <button className="checkinsubmit" onClick={newCheckinSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckinForm;
