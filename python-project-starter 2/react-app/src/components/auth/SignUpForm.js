import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import Modal from "react-modal";

import "./SignUpForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "350px",
    width: "280px",
    borderRadius: "5px",
    fontFamily: "Century Gothic, CenturyGothic, AppleGothic, sansSerif",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
};

Modal.setAppElement("#root");

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setShowModal(false);
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <button onClick={openModal}>Sign Up</button>
      <Modal
        closeTimeoutMS={500}
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sign up Modal"
      >
        <div className="sign-up-modal-container">
          <div className="intro-text">
            <h2>Registration</h2>
            <h3>Let's Setup Your Account!</h3>
          </div>
          <form className="sign-up-form" onSubmit={onSignUp}>
            <div className="textuser">
              <label>Username</label>
            </div>
            <div>
              <input
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div className="textemail">
              <label>Email</label>
            </div>
            <div>
              <input
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div className="textpass">
              <label>Password</label>
            </div>
            <div className="password-input-field">
              <input
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div className="textverify">
              <label>Verify Password</label>
            </div>
            <div>
              <input
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button className="signsubmit" type="submit">
              Register
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SignUpForm;
