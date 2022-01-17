import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <h3 className="registerLogo">Tarek Social</h3>
            <span className="registerDesc">
              connect with friends and the world around you on tarekSocial
            </span>
          </div>
          <div className="registerRight">
            <div className="registerBox">
              <input placeholder="userName" className="registerInput" />
              <input placeholder="Email" className="registerInput" />
              <input placeholder="Password" className="registerInput" />
              <input placeholder="Confirm Password" className="registerInput" />
              <button className="RegisterButton"> Register Now </button>
              <button className="loginRegisterButton">
                {" "}
                Log Into Account{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
