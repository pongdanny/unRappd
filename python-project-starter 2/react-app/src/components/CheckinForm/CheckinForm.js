import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { createCheckin } from "../../services/checkin";
import { getSongs } from "../../services/song";
import "./CheckinForm.css";
// import { map } from "lodash";

const CheckinForm = () => {
  const [errors, setErrors] = useState([]);
  const [songNames, setSongNames] = useState("");
  const [songName, setSongName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await getSongs();
      // console.log(res);
      setSongNames(res);
      // console.log(res);
    })();
  }, []);

  const newCheckinSubmit = async (e) => {
    // console.log("this works", checkin);
    e.preventDefault();
    // e.stopPropagation();
    // const newCheckin = await createCheckin(songNames, review, rating);
    const data = new FormData();
    data.append("songNames", songNames);
    data.append("rating", rating);
    data.append("review", review);
    const checkin = await createCheckin(data);
    console.log("Bump Made!", checkin);

    if (!checkin.errors) {
      console.log("Submit successful! ", checkin);
      history.push("/");
    } else {
      setErrors(checkin.errors);
      return;
    }
  };

  const updateSongName = (e) => {
    setSongName(e.target.value);
  };

  const updateReview = (e) => {
    setReview(e.target.value);
  };

  // const updateRating = (e) => {
  //   setRating(e.target.value);
  // };

  console.log("this works", songNames);

  return (
    <>
      <img
        className="checkinimg"
        src="https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      />
      <div className="addnewcheckin">Add a New Bump! 🎵</div>
      <form
        onSubmit={newCheckinSubmit}
        // encType="multipart/form-data"
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
            value={songName}
            onChange={updateSongName}
          >
            <option value={null}>Choose a Song</option>
            {/* {map(
              songNames,
              (songName) => (
                (
                  <option key={songName.id} value={songName.id}>
                    {songName.songName}
                  </option>
                ),
                console.log(songName.id)
              )
            )} */}
            {songNames &&
              songNames.map((songName) => (
                <option key={songName.id} value={songName.id}>
                  {songName.songName}
                </option>
              ))}
          </select>
          <label className="review"></label>
          <div className="star-container">
            <label htmlFor="content" className="star-widget">
              Rating
            </label>
            <div
              className="review__stars"
              onChange={(e) => setRating(e.target.value)}
            >
              {[5, 4, 3, 2, 1].map((starRating) => (
                <>
                  <input
                    type="radio"
                    name="rate"
                    id={`review__stars_${starRating}`}
                    value={starRating}
                    defaultChecked={rating === starRating}
                  />
                  <label
                    htmlFor={`review__stars_${starRating}`}
                    className="fas fa-star"
                  ></label>
                </>
              ))}
            </div>
          </div>
          <label className="rating">Review </label>
          <input
            name="review"
            type="text"
            placeholder="Add Review"
            value={review}
            onChange={updateReview}
          />
          {/* <button
            className="checkinsubmit"
            type="submit"
            onClick={newCheckinSubmit}
          >
            Submit
          </button> */}
          <input type="submit" className="checkinsubmit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default CheckinForm;
