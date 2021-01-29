import React, { useState } from "react";
import { editCheckin } from "../../services/checkin";

const CheckinFormEdit = ({
  currentCheckin,
  setCheckins,
  getCheckins,
  setIsFormVisible,
}) => {
  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null);

  const newCheckinSubmit = async (e) => {
    e.preventDefault();
    console.log("CURRENT CHECKIN!!!!!!", currentCheckin);
    await editCheckin(
      currentCheckin.id,
      review,
      rating,
      currentCheckin.user.id
    );
    // console.log("TEST!!!", test);
    const checkins = await getCheckins();
    console.log("CHECKINS!!!!!!", checkins);
    setCheckins(checkins.checkins);
    setErrors([]);
    setReview(null);
    setRating(null);
    setIsFormVisible(false);
  };

  const updateReview = (e) => {
    setReview(e.target.value);
  };

  // const updateRating = (e) => {
  //   setRating(e.target.id);
  // };

  return (
    <>
      {/* <img
        className="checkinimg"
        src="https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      /> */}
      <div className="addnewcheckin">Add a New Bump! 🎵</div>
      <form onSubmit={newCheckinSubmit} className="newCheckinForm">
        <div className="checkincontainer">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
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
                    className=""
                    type="radio"
                    name="rate"
                    id={`review__stars_${starRating}`}
                    value={starRating}
                    defaultChecked={rating === starRating}
                  />
                  <label
                    htmlFor={`review__stars_${starRating}`}
                    className=""
                  ></label>
                </>
              ))}
            </div>
          </div>
          <label className="rating">Review </label>
          <textarea
            name="review"
            placeholder="Add Review"
            value={review}
            onChange={updateReview}
          ></textarea>
          <input type="submit" className="checkinsubmit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default CheckinFormEdit;
