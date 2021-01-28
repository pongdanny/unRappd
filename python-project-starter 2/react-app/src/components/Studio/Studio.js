import React, { useState, useEffect } from "react";
import "./Studio.css";
import { getCheckins } from "../../services/checkin";
// import { getSongs } from "../../services/song";
// import Song from "../Song/Song";

const Studio = ({ user }) => {
  const [checkins, setCheckins] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getCheckins(user);
      console.log("checkins", res);
      setCheckins(res.checkins);
    })();
  }, [user]);

  return (
    <div>
      <img
        alt="checkinlistimg"
        className="checkinlistimg"
        src="https://images.unsplash.com/photo-1568246605205-f8df0dde3c35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ></img>
      <h1 className="checkintext">Check out the Recent Bumps!</h1>
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
      <a href="/newcheckin" className="bumpsongbtn">
        Bump a Song
      </a>

      <div>
        <section>
          <div className="checkinlistcontainer">
            <div className="checkinlist">
              {checkins &&
                checkins.map((mappedCheckin, idx) => {
                  return (
                    <>
                      <div className="checkindetailcontainer">
                        <div className="checkindetails" href="/checkindetails">
                          {" "}
                          {mappedCheckin.user.username} is bumpin{" "}
                          {mappedCheckin.song.songName} by{" "}
                          {mappedCheckin.song.artist.artistName}
                        </div>
                        <div className="checkindetails">
                          Review: "{mappedCheckin.review}"
                        </div>
                        <div className="checkindetails">
                          Rating[1-5]: {mappedCheckin.rating} Stars
                        </div>
                        {/* <button className="editbtn">Edit</button>
                        <button className="deletebtn">Delete</button> */}
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Studio;
