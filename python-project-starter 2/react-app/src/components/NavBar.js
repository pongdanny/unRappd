import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import "./NavBar.css";

const NavBar = ({ setAuthenticated, authenticated }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const artistRes = await fetch("/api/artists/");
      const artistResData = await artistRes.json();

      const songRes = await fetch("/api/songs/");
      const songResData = await songRes.json();

      let artistsAndSongs = [];
      artistsAndSongs.push(artistResData);
      artistsAndSongs.push(songResData);

      setData(artistsAndSongs);
    };
    fetchAll();
  }, []);

  const handleSubmit = () => {
    const artistFilteredResults = data[0].filter((artist) =>
      artist.name.toLowerCase().includes(search.toLowerCase())
    );
    const songFilteredResults = data[1].filter((song) =>
      song.name.toLowerCase().includes(search.toLowerCase())
    );

    let artistsAndSongsFiltered = [];
    artistsAndSongsFiltered.push(artistFilteredResults);
    artistsAndSongsFiltered.push(songFilteredResults);
    // setResults(artistsAndSongsFiltered);
    setSearch("");
    return history.push("/search");
  };

  return (
    <nav className="nav navbar-container">
      <div className="upper-section">
        <ul className="nav navbar-items">
          <li className="nav navbar-item">
            <NavLink to="/" exact={true} className="unrappd">
              <div>&nbsp; &nbsp;UNRAPPD</div>
              {/* <img className="logo" alt="unrappd logo" src=""></img> */}
            </NavLink>
          </li>
          <input
            className="searchbar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                return handleSubmit();
              }
            }}
            placeholder="Looking For Something? Search Here!"
          ></input>
          <div className="linkcontainer">
            <div className="github">
              <a href="https://github.com/pongdanny">Github</a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/danielpong/">LinkedIn</a>
            </div>
            <div className="angellist">
              <a href="https://angel.co/u/dannypong">AngelList</a>
            </div>
          </div>
          {authenticated ? (
            <>
              <div className="user-container">
                <div className="dropdown">
                  <button className="dropbtn">
                    <a href="/profile" className="you-button">
                      <img
                        className="usericon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4gjlRnYx_Syp-ktNGolRWqP0LXuVL4ddjg&usqp=CAU"
                      ></img>
                    </a>
                    <i className=""></i>
                  </button>
                  <div className="dropdown-content">
                    <LogoutButton setAuthenticated={setAuthenticated} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="login-container">
              <li className="nav login">
                <LoginForm
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              </li>
              <li className="nav sign-up">
                <SignUpForm
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              </li>
            </div>
          )}
        </ul>
        <div className="lower-section">
          <div>
            <NavLink to="/checkins" exact={true}>
              Studio
            </NavLink>
          </div>
          <div>
            <NavLink to="/artists" exact={true}>
              Artists
            </NavLink>
          </div>
          <div>
            <NavLink to="/songs" exact={true}>
              Songs
            </NavLink>
          </div>
          <div>
            <NavLink to="/newartist" exact={true}>
              New Artist
            </NavLink>
          </div>
          <div>
            <NavLink to="/newsong" exact={true}>
              New Song
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
