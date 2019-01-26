import React from "react";
import ReactTyped from "react-typed";

const LandingPage = () => (
  <div className="landing-container">
    <img
      src="images/cape_town.jpg"
      height="200"
      width="300"
      className="landing-image"
      alt="selfie in Capetown, South Africa"
    />
    <p className="landing-title">Cory McAboy</p>
    <hr className="landing-hr" />
    <p className="landing-subtitle">
      Product Manager - Retail Developer - Data Geek
    </p>
    <hr className="landing-hr" />
    <ReactTyped
      typeSpeed={40}
      backSpeed={40}
      strings={[
        "Hi! My name is Cory. I do product stuff!",
        " Feel free to take a look around..."
      ]}
      showCursor
      startDelay={1000}
      loop
    />
    <br />
    {/*<Button className="landing-contact-button">Contact Me</Button>*/}
  </div>
);

export default LandingPage;
