import React from "react";
import GithubIcon from "react-icons/lib/fa/github";

export default class FeaturedPage extends React.Component {
  render() {
    return (
      <div className="feature-container">
        <p className="work-title">Stagg</p>
        <hr className="landing-hr" />
        <p className="work-subtitle">
          A simple dating app built with React Native, Redux, Node.js, Google
          Cloud Functions, and Firestore
        </p>
        <hr className="landing-hr" />
        <a href="https://github.com/cmcaboy/stagg">
          <div className="feature-button">
            <div className="github-icon">
              <GithubIcon />
            </div>
            <p className="github-label">Source Code</p>
          </div>
        </a>
        <div className="feature-gif-container">
          <div className="feature-gif-item">
            <img
              src="images/stagg_login_gif.gif"
              className="feature-gif"
              alt="login"
            />
            <p className="feature-gif-caption">login flow</p>
          </div>
          <div className="feature-gif-item">
            <img
              src="images/stagg_swipe_gif.gif"
              className="feature-gif"
              alt="mobile app tinder like swipe"
            />
            <p className="feature-gif-caption">like/disliking candiates</p>
          </div>
          <div className="feature-gif-item">
            <img
              src="images/stagg_matches_gif.gif"
              className="feature-gif"
              alt="gif of mobile app dating matches"
            />
            <p className="feature-gif-caption">view matches</p>
          </div>
          <div className="feature-gif-item">
            <img
              src="images/stagg_profile_gif.gif"
              className="feature-gif"
              alt="gif of tinder like profiles"
            />
            <p className="feature-gif-caption">edit profile/settings</p>
          </div>
        </div>
      </div>
    );
  }
}
