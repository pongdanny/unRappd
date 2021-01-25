// Always order your imports so that external/libraries
// are at the top
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
​
//And your internal imports after that
import { createCheckin } from "../../services/checkin";
import { getSongs } from "../../services/song";
import "./CheckinForm.css";
​
const CheckinForm = () => {
  const [errors, setErrors] = useState([]);
  const [songNames, setSongNames] = useState("");
  const [songName, setSongName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5); // Default this to 5, so the form shows the correct default rating.
  const history = useHistory();
​
  useEffect(() => {
    (async () => {
      const res = await getSongs();
      setSongNames(res);
    })();
  }, []);
​
  const newCheckinSubmit = async (e) => {
    e.preventDefault();
​
    const data = new FormData();
    data.append("songNames", songNames);
    data.append("review", review);
    data.append("rating", rating);
    const checkin = await createCheckin(data);
    if (!checkin.errors) {
      console.log("Submit successful! ", checkin);
      history.push('/');
    } else {
      setErrors(checkin.errors);
      return;
    }
  };
​
  return (
    <>
      {/* I always recommend using self-closing tags for img's */}
      <img
        className="checkinimg"
        src="https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      />
      <div className="addnewcheckin">Add a New Bump! 🎵</div>
      <form
        onSubmit={newCheckinSubmit}
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
            onChange={(e) => setSongName(e.target.value)}
          >
            <option value={null}>Choose a Song</option>
            {songNames &&
              songNames.map((songName) => (
                <option key={songName.id} value={songName.id}>
                  {songName.songName}
                </option>
              ))}
          <div className="star-container">
            <label htmlFor="content" className="star-widget">
              Rating
            </label>
            {/* I put the onChange handler on the surrounding div, here, so we don't have to repeat it on each input */}
            <div className="review__stars" onChange={(e) => setRating(e.target.value)}> 
              {[5, 4, 3, 2, 1].map((starRating) => (
                {/* Instead of repeating ourself at each rating score, we can map over the values that we allow as inputs. */}
                <input
                  type="radio"
                  name="rate"
                  id={`review__stars_${starRating}`} {/* I added a prefix to the `id` here, since id's should be unique site-wide. */}
                  value={starRating} {/* Here it's important to specify the `value` */}
                  checked={rating === starRating} {/* Instead of specifying defaultChecked, dynamically check whichever is currently selected */}
                />
                <label htmlFor={`review__stars_${starRating}`} className="fas fa-star"></label>
              ))};
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
          {/* Always use a input type submit, and catch the form "onsubmit" event */}
          <input
            type="submit"
            className="checkinsubmit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};
​
export default CheckinForm;