import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCheckin, getCheckins } from "../../services/checkin";
// import './CheckinForm.css';

const CheckinForm = ({}) => {
  const [userId, setUserId] = useState("");
  const [songId, setSongId] = useState("");
  const [artistId, setArtistId] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const newCheckinSubmit = async (e) => {
    e.preventDefault();
    const newCheckin = await createCheckin(
      userId,
      songId,
      artistId,
      review,
      rating
    );
    const checkins = await getCheckins();
  };

  const updateUserId = (e) => {
    setUserId(e.target.value);
  };

  const updateSongId = (e) => {
    setSongId(e.target.value);
  };

  const updateArtistId = (e) => {
    setArtistId(e.target.value);
  };

  const updateReview = (e) => {
    setReview(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <>
      <form className="newCheckinForm">
        <div className="artistContainer">
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
          <label className="artistId">Artist ID</label>
          <input
            name="artistId"
            placeholder="Add Artist ID"
            value={artistId}
            onChange={updateArtistId}
          />
          <label className="review">Review</label>
          <input
            name="review"
            placeholder="Add Review"
            value={review}
            onChange={updateReview}
          />
          <label className="rating">Rating</label>
          <input
            name="rating"
            placeholder="Add Rating"
            value={rating}
            onChange={updateRating}
          />
        </div>
      </form>
      <button onClick={newCheckinSubmit}>Submit</button>
    </>
  );
};

export default CheckinForm;
