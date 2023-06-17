import React from "react";
import "./Styles/TeamStyles.css";
import Instapic from "/src/assets/instagram.png";
import Linkedinpic from "/src/assets/linkedin.png";
import Mailpic from "/src/assets/email.png";

function TeamInfo(props) {
  return (
    <div className="currentspeakers">
      <div className="image">
        <img className="imag" src={props.imgURL} alt="" width="270px" />
      </div>
      <div className="info">
        <h1 className="infoh1">{props.name}</h1>
        <p>
          <i>{props.profession}</i>
        </p>
        <div className="team-contact-section">
          <a
            className="contactlink"
            href="https://www.instagram.com/kazu_kun106/"
          >
            <img className="contactimg" src={Instapic} alt=" " width="28px" />
          </a>
          <a
            className="contactlink"
            href="https://www.instagram.com/kazu_kun106/"
          >
            <img
              className="contactimg"
              src={Linkedinpic}
              alt=" "
              width="28px"
            />
          </a>
          <a
            className="contactlink"
            href="https://www.instagram.com/kazu_kun106/"
          >
            <img className="contactimg" src={Mailpic} alt=" " width="28px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
