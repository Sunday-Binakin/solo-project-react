import React from "react";
import ProfilePic from "../images/dev.png";

const Info = () => {
  return (
    <div className="info">
      <img src={ProfilePic} alt="" className="info--image" />

      <h3 className="info--name">Laura Smith</h3>
      <h4 className="info--title">Frontend Developer</h4>
      <h5 className="info--location">Warsaw,Poland</h5>
      <div className="info--buttons">
        <button className="btn btn-secondary info--email--button">Email</button>
        <button className="btn btn-primary info--linkedin--button">
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
