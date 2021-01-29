import React, { useState, useEffect } from "react";
import "./Studio.css";
import CheckinFormEdit from "../CheckinForm/CheckinFormEdit";
import { getCheckins, deleteCheckin } from "../../services/checkin";
// import { getSongs } from "../../services/song";
// import Song from "../Song/Song";

const Studio = ({ user }) => {
  const [checkins, setCheckins] = useState(null);
  const [currentCheckin, setCurrentCheckin] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  // const [isCheckinVisible, setIsCheckinVisible] = useState(true);

  const createStarRating = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <>
          <i key={`${i + 1}`} className="fa fa-star"></i>
        </>
      );
    }
    return stars;
  };

  useEffect(() => {
    (async () => {
      const res = await getCheckins(user);
      console.log("checkins", res);
      setCheckins(res.checkins);
    })();
  }, [user]);

  const renderEdit = (e) => {
    setCurrentCheckin(checkins[e.target.id]);
    console.log("this works!", checkins[e.target.id]);
    setIsFormVisible(true);
  };

  const deleteHandler = async (checkinId) => {
    // console.log(user.id);
    await deleteCheckin(user.id, checkinId);
    const checkins = await getCheckins(user.id);
    setCheckins(checkins.res.checkins);

    setIsFormVisible(false);
  };

  return (
    <div className="studiopage">
      <img
        alt="checkinlistimg"
        className="checkinlistimg"
        src="https://images.unsplash.com/photo-1568246605205-f8df0dde3c35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ></img>

      {isFormVisible && (
        <CheckinFormEdit
          user={user}
          currentCheckin={currentCheckin}
          setCheckins={setCheckins}
          getCheckins={getCheckins}
          setIsFormVisible={setIsFormVisible}
        />
      )}
      {/* <h2>
          user {checkins && checkins[0].user.username} is bumping{" "}
          {checkins && checkins[0].song.songName} by{" "}
          {checkins && checkins[0].artist.artistName}
        </h2>
        <h2>
          user {checkins && checkins[1].user.username} is bumping{" "}
          {checkins && checkins[1].song.songName} by{" "}
          {checkins && checkins[1].artist.artistName}
        </h2> */}

      <div>
        <section>
          <div className="checkinlistcontainer">
            <div className="checkinlist">
              {!isFormVisible ? (
                <>
                  <h1 className="checkintext">Check out the Recent Bumps!</h1>
                  <a href="/newcheckin" className="bumpsongbtn">
                    Bump a Song
                  </a>
                  {checkins &&
                    checkins.map((mappedCheckin, idx) => {
                      return (
                        <>
                          <div className="speech-bubble"></div>
                          <div className="checkindetailcontainer">
                            <div
                              className="checkindetails"
                              href="/checkindetails"
                            >
                              {" "}
                              <span className="wheat">
                                {mappedCheckin.user.username}
                              </span>{" "}
                              is bumpin{" "}
                              <span className="wheat">
                                {mappedCheckin.song.songName}
                              </span>{" "}
                              by{" "}
                              <span className="wheat">
                                {mappedCheckin.song.artist.artistName}
                              </span>
                            </div>
                            <div className="checkindetailss">
                              {" "}
                              <span className="revspan">
                                "{mappedCheckin.review}"
                              </span>
                            </div>
                            <div className="checkindetailsss">
                              CLOUT:{" "}
                              <span className="starz">
                                {createStarRating(mappedCheckin.rating)}
                              </span>
                            </div>
                            {user.id === mappedCheckin.user.id && (
                              <>
                                <button
                                  className="editzbtn"
                                  id={idx}
                                  onClick={renderEdit}
                                >
                                  Edit
                                </button>
                                <button
                                  className="delzbtn"
                                  onClick={() =>
                                    deleteHandler(mappedCheckin.user.id)
                                  }
                                >
                                  Delete
                                </button>
                              </>
                            )}
                            {/* <button className="editbtn">Edit</button>
                          <button className="deletebtn">Delete</button> */}
                          </div>
                        </>
                      );
                    })}
                </>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Studio;
