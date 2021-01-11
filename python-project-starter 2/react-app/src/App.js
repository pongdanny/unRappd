import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

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
    <BrowserRouter>
      <NavBar
        setAuthenticated={setAuthenticated}
        authenticated={authenticated}
        // setResults={setResults}
      />
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
      <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
        <h1>Bump Socially</h1>
      </ProtectedRoute>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
