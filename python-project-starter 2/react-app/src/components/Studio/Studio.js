import React, { useState, useEffect } from "react";
// import "./Studio.css";
import { getCheckins } from "../../services/checkin";

const Studio = ({ user }) => {
  const [checkin, setCheckin] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getCheckins(user);
      console.log("checkin", res);
      setCheckin(res.checkins);
    })();
  }, [user]);

  return (
    <div>
      <div>
        <h1>Check out the Recent Bumps!</h1>
        <h2>:)</h2>
        <button>Bump a Song</button>
      </div>
      <div>
        <section>
          <h1>
            0: {/* Math.floor(Math.random() * 10) */}
            {checkin && checkin[0].review}
          </h1>
          <h1>1: {checkin && checkin[1].review}</h1>
          <h1>2: {checkin && checkin[2].review}</h1>
          <h1>3: {checkin && checkin[3].review}</h1>
          <h1>4: {checkin && checkin[4].review}</h1>
          <h1>5: {checkin && checkin[5].review}</h1>
        </section>
      </div>
    </div>
  );
};

export default Studio;
