import React, { useState, useEffect } from "react";
import "./Studio.css";
import { getCheckins } from "../../services/checkin";
import { getSongs } from "../../services/song";
import Song from "../Song/Song";

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
        className="checkinlistimg"
        src="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphone-3085681_960_720.jpg"
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
                          {mappedCheckin.user.username} is bumping{" "}
                          {mappedCheckin.song.songName} by{" "}
                          {mappedCheckin.artist.artistName},
                        </div>
                        <div className="checkindetails">
                          Review: {mappedCheckin.review}
                        </div>
                        <div className="checkindetails">
                          Rating: {mappedCheckin.rating}
                        </div>
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
