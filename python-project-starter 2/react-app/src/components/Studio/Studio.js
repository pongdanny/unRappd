import React, { useState, useEffect } from "react";
// import "./Studio.css";
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
      <div>
        <h1>Check out the Recent Bumps!</h1>
        <h2>
          user {checkins && checkins[0].user.username} is bumping{" "}
          {checkins && checkins[0].song.songName} by{" "}
          {checkins && checkins[0].artist.artistName}
        </h2>
        <h2>
          user {checkins && checkins[1].user.username} is bumping{" "}
          {checkins && checkins[1].song.songName} by{" "}
          {checkins && checkins[1].artist.artistName}
        </h2>
        <a className="bumpsongbtn" href="/newcheckin">
          Bump a Song
        </a>
      </div>
      <div>
        <section>
          <div>
            {checkins &&
              checkins.map((mappedCheckin, idx) => {
                return (
                  <div>
                    {" "}
                    user {mappedCheckin.user.username} is bumpin{" "}
                    {mappedCheckin.song.songName} by{" "}
                    {mappedCheckin.artist.artistName}, Here's their
                    Review/Rating: {mappedCheckin.review},{" "}
                    {mappedCheckin.rating}
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Studio;
