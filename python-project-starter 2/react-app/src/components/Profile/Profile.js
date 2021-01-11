import React, { useState, useEffect } from "react";
import "./Profile.css";
import { getCheckins } from "../../services/checkin";

const Profile = ({ user }) => {
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
        <div>Hey There {user.username}!</div>
        <div>Email: {user.email}</div>
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

export default Profile;
