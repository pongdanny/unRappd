import React from "react";
import "./Home.css";
// import LoginForm from "../auth/LoginForm";

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
                We provide a platform for hip hop artists who we feel deserve
                the spotlight! Rappers come from all walks of life and their
                voices deserve to be heard, especially the ones who've got real
                stories to tell. For most of these artists, its much deeper than
                rap..
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
