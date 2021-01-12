import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./Song.css";
import { getSongs } from "../../services/song";

function Song({ user }) {
  const [song, setSong] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getSongs(user);
      console.log("song", res);
      setSong(res.songs);
    })();
  }, [user]);

  return (
    <div>
      <div>
        <h1>List of Available Songs!</h1>
        <h2>Feel Free to Add More!</h2>
        <div></div>
      </div>
      <div>
        <section>
          <h1>0: {song && [song[0].songName, " : ", song[0].albumName]}</h1>
          <h1>2: {song && [song[2].songName, " : ", song[2].albumName]}</h1>
          <h1>4: {song && [song[4].songName, " : ", song[4].albumName]}</h1>
          <h1>6: {song && [song[6].songName, " : ", song[6].albumName]}</h1>
          <h1>8: {song && [song[8].songName, " : ", song[8].albumName]}</h1>
          <h1>10: {song && [song[10].songName, " : ", song[10].albumName]}</h1>
          <h1>12: {song && [song[12].songName, " : ", song[12].albumName]}</h1>
          <h1>14: {song && [song[14].songName, " : ", song[14].albumName]}</h1>
          <h1>16: {song && [song[16].songName, " : ", song[16].albumName]}</h1>
          <h1>18: {song && [song[18].songName, " : ", song[18].albumName]}</h1>
        </section>
      </div>
    </div>
  );
}

export default Song;
