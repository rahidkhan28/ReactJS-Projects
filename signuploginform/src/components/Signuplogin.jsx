import React, { useState } from "react";
import "./Signuplogin.css";

const Signuplogin = () => {
  let [action, setAction] = useState("Login");

  return (
    <div>
      <div className="container">
        <div className="text">
          <h1>{action}</h1>
        </div>
        <div className="underline"></div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="text" placeholder="username" />
            </div>
          )}
          <div className="input">
            <input type="email" placeholder="email" />
          </div>
          <div className="input">
            <input type="password" placeholder="password" />
          </div>
          {action === "Sign up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              <p>
                forgot password?<a href="#">click here</a>
              </p>
            </div>
          )}
          <div className="buttons">
            <div className="btn-login">
              <button
                className={action === "Login" ? "submit grey" : "submit"}
                onClick={() => {
                  setAction("Sign up");
                }}
              >
                Signup
              </button>
            </div>
            <div className="btn-signup">
              <button
                className={action === "Sign up" ? "submit grey" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuplogin;
