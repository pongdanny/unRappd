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
          <div>
            {checkin &&
              checkin.map((mappedCheckin, idx) => {
                return (
                  <div>
                    {idx + 1} : {mappedCheckin.review}
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
