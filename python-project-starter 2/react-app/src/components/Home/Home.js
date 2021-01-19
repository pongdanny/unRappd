import React from "react";
import "./Home.css";
import LoginForm from "../auth/LoginForm";

const Home = () => {
  return (
    <div id="hero">
      <div id="hero-cover">
        <img
          id="hero-image"
          src="https://cdn.pixabay.com/photo/2014/12/02/21/53/urban-554606_960_720.jpg"
        />
      </div>
      <div id="hero-content">
        <div class="container">
          <div class="content-shadow">
            <h1 id="hero-title">Welcome to UNRAPPD!</h1>
            <div id="hero-description">
              <p>
                We Strive To Provide A Platform For Underground Hip Hop Artists
                Who We Feel Should Earn The Spotlight!
                {/* Rappers Come From All
                Walks Of Life And Their Voices Deserve To Be Heard, Especially
                The Ones Who've Got Real Stories To Tell. For Most Of These
                Artists, Its Much Deeper Than Rap.. */}
              </p>
              <p>
                <strong>
                  Let's make it easy to share your favorite artists & tracks 🎧
                </strong>
              </p>
              <p>
                <em>Bump Socially.</em>
              </p>
            </div>
            <a className="letsgo" href="/checkins">
              {" "}
              Let's Go!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
