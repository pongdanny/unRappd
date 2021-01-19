import React, { useState, useEffect } from "react";
import { createCheckin, getCheckins } from "../../services/checkin";
import { useHistory } from "react-router-dom";
import "./CheckinForm.css";
import { getSongs } from "../../services/song";

const CheckinForm = () => {
  const [errors, setErrors] = useState([]);
  const [songNames, setSongNames] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  useEffect(() => {
    (async () => {
      const res = await getSongs();
      console.log(res);
      setSongNames(res);
    })();
  }, []);
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
        src="https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      ></img>
      <div className="addnewcheckin">Add a New Bump! 🎵</div>
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
          <label htmlFor="songName" className="songName">
            Song Name
          </label>
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
                <option key={songName.id} value={songName.id}>
                  {songName.songName}
                </option>
              ))}
          </select>
          <label className="review"></label>
          {/* <input
            name="review"
            type="text"
            placeholder="Add Review"
            value={review}
            onChange={updateReview}
          /> */}
          <div className="star-container">
            <label htmlFor="content" className="star-widget">
              Rating
            </label>
            <div className="review__stars">
              <input
                type="radio"
                onClick={updateRating}
                name="rate"
                id="5"
                defaultChecked
              />
              <label htmlFor="5" className="fas fa-star"></label>
              <input type="radio" onClick={updateRating} name="rate" id="4" />
              <label htmlFor="4" className="fas fa-star"></label>
              <input type="radio" onClick={updateRating} name="rate" id="3" />
              <label htmlFor="3" className="fas fa-star"></label>
              <input type="radio" onClick={updateRating} name="rate" id="2" />
              <label htmlFor="2" className="fas fa-star"></label>
              <input type="radio" onClick={updateRating} name="rate" id="1" />
              <label htmlFor="1" className="fas fa-star"></label>
            </div>
          </div>
          <label className="rating">Review </label>
          <input
            name="review"
            type="text"
            placeholder="Add Review"
            value={rating}
            onChange={updateReview}
          />
          <button
            className="checkinsubmit"
            type="button"
            onClick={newCheckinSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckinForm;
