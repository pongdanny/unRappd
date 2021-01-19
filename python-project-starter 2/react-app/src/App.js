import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
import User from "./components/User";
import Song from "./components/Song/Song";
import { authenticate } from "./services/auth";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Artist from "./components/Artist/Artist";
import Studio from "./components/Studio/Studio";
import ArtistForm from "./components/NewArtist/NewArtist";
import SongForm from "./components/NewSong/NewSong";
import CheckinForm from "./components/CheckinForm/CheckinForm";
import Home from "./components/Home/Home";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState({});
  // const [currentUser, setCurrentUser] = useState("");
  // const [currentUserId, setCurrentUserId] = useState("");
  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setUser(user);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
          // setResults={setResults}
        />
        {/* <Route>
          <Home />
        </Route> */}
        <ProtectedRoute
          path="/profile"
          exact={true}
          authenticated={authenticated}
        >
          <Profile user={user} />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
        <UsersList />
      </ProtectedRoute> */}
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute
          path="/checkins"
          exact={true}
          authenticated={authenticated}
        >
          <Studio user={user} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/songs"
          exact={true}
          authenticated={authenticated}
        >
          <Song user={user} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/artists"
          exact={true}
          authenticated={authenticated}
        >
          <Artist user={user} />
        </ProtectedRoute>
        <Route path="/" exact={true} authenticated={authenticated}>
          <Home />
          {/* <h1>Bump Socially</h1> */}
        </Route>
        <ProtectedRoute
          path="/newcheckin"
          exact={true}
          authenticated={authenticated}
        >
          <CheckinForm user={user} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/newartist"
          exact={true}
          authenticated={authenticated}
        >
          <ArtistForm user={user} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/newsong"
          exact={true}
          authenticated={authenticated}
        >
          <SongForm user={user} />
        </ProtectedRoute>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
