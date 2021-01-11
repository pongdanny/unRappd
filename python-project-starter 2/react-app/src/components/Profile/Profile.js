import React, { useState, useEffect } from "react";
import "./Profile.css";
import { getCheckins } from "../../services/checkin";

const Profile = ({ user }) => {
  const [checkin, setCheckin] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getCheckins(user.id);
      setCheckin(res);
    })();
  }, [user.id]);
  return (
    <div>
      <header>
        <div>
          <div>Hey {user.username} !</div>
          <div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        </div>
      </header>
      <div>
        <section>
          <h1>Checkins {checkin}</h1>
        </section>
      </div>
    </div>
  );
};

export default Profile;
