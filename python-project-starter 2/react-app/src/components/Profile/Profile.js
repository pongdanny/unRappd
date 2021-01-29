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
        <img
          alt="heroimg"
          id="hero-image"
          src="https://cdn.pixabay.com/photo/2019/09/27/07/57/music-4507819_960_720.jpg"
        />
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
                  <h1>Bump of the Day:</h1>
                  <h2>{checkin && checkin[0].review}</h2>
                </section>
              </h1>
              <figure>
                <div className="usertitle"></div>
                <div className="userdata">
                  <div>Hey {user.username}! </div>
                  <div className="email">{user.email}</div>
                  <button className="editprofile">Edit Profile</button>
                </div>
              </figure>
            </div>
            <div className="profile-info">
              <div className="profile-info-data">
                <div className="profile-info-data__number">1</div>
                <div className="profile-info-data__name">Bumps</div>
              </div>

              <div className="profile-info-data">
                <div className="profile-info-data__number">0</div>
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
