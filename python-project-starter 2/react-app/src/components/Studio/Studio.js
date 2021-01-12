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
        <div>Check out the Recent Bumps!</div>
        <div>:)</div>
        <div>{user.id}</div>
      </div>
      <div>
        <section>
          <h1>Checkins: {checkin && checkin[0].review}</h1>
        </section>
      </div>
    </div>
  );
};

export default Studio;
