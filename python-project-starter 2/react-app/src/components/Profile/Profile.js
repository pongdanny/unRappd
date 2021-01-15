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
    <>
      {/* <div>
        <div>
          <div>Hey There {user.username}!</div>
          <div>Email: {user.email}</div>
          <div></div>
        </div>
        <div>
          <section>
            <h1>Checkins: {checkin && checkin[0].review}</h1>
          </section>
        </div>
      </div> */}
      <div className="page">
        <div className="profile">
          <div className="profile-background"></div>
          <div className="profile-contents">
            <div className="profile-header">
              <svg
                className="profile-header__icon"
                width="10rem"
                height="10rem"
              >
                <div className="profile-icon"></div>
              </svg>

              <h1 className="profile-header__text">
                <section>
                  <h1>Recent Bump:</h1>
                  <h2>{checkin && checkin[0].review}</h2>
                </section>
              </h1>
              <figure>
                <div className="usertitle"></div>
                <div className="userdata">
                  <div>Hey {user.username}! </div>
                  <div className="email">{user.email}</div>
                </div>
              </figure>
            </div>
            <div className="profile-info">
              <div className="profile-info-data">
                <div className="profile-info-data__number">1</div>
                <div className="profile-info-data__name">Bumps</div>
              </div>

              <div className="profile-info-data">
                <div className="profile-info-data__number">7</div>
                <div className="profile-info-data__name">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
