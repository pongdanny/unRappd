import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../services/auth";
import Modal from "react-modal";

import "./LoginForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "275px",
    width: "300px",
    borderRadius: "5px",
    fontFamily: "Montserrat",
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
  },
};

Modal.setAppElement("#root");

const LoginForm = ({ authenticated, setAuthenticated }) => {
  // const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setShowModal(false);
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      console.log("authenticated!!!");
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/studio" />;
  }

  const demoUser = async (e) => {
    e.preventDefault();
    const user = await login("demo@aa.io", "password");
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <>
      <button onClick={openModal}>Login</button>
      <Modal
        closeTimeoutMS={500}
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="modal-login-container">
          <div className="sign-in-register">
            <div>
              <h2 className="sign-in-header-text">Welcome Back!</h2>
              <h3>Please Enter Your Credentials</h3>
            </div>
          </div>

          <form onSubmit={onLogin}>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            <div>
              <div className="emailtext">
                <label htmlFor="email">Email</label>
              </div>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <div className="passwordtext">
                <label htmlFor="password">Password</label>
              </div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
              <div>
                <button className="loginbtnz" type="submit">
                  Login
                </button>
                <button className="demobtnz" onClick={demoUser}>
                  Demo
                </button>
              </div>
              <div className="link-to-sign-up">
                {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
                  New User? Sign Up!
                </NavLink> */}
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginForm;
