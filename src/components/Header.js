import React from "react";
import { Link } from "react-router-dom";
import ContactIcon from "react-icons/lib/md/contact-mail";
import HomeIcon from "react-icons/lib/fa/home";
import WorkIcon from "react-icons/lib/fa/briefcase";
import ProjectIcon from "react-icons/lib/fa/cogs";
import FBIcon from "react-icons/lib/fa/facebook-square";
import TwitterIcon from "react-icons/lib/fa/twitter-square";
import LinkedInIcon from "react-icons/lib/fa/linkedin-square";
import GithubIcon from "react-icons/lib/fa/github-square";
import FeaturedIcon from "react-icons/lib/md/star";
import YoutubeIcon from "react-icons/lib/fa/youtube-square";

const ICON_SIZE = 26;
const FA_SIZE = 34;

const Header = ({ startLogout }) => (
  <header className="header">
    <div>
      <Link to="/" className="header__title">
        <div className="header__link">
          <HomeIcon color="white" size={ICON_SIZE} />
          <p className="header__link-text">Home</p>
        </div>
      </Link>
      <hr className="hr-header" />
      <Link to="/featured" className="header__title">
        <div className="header__link">
          <FeaturedIcon color="white" size={ICON_SIZE} />
          <p className="header__link-text">Featured</p>
        </div>
      </Link>
      <hr className="hr-header" />
      <Link to="/projects" className="header__title">
        <div className="header__link">
          <ProjectIcon color="white" size={ICON_SIZE} />
          <p className="header__link-text">Projects</p>
        </div>
      </Link>
      <hr className="hr-header" />
      <Link to="/work" className="header__title">
        <div className="header__link">
          <WorkIcon color="white" size={ICON_SIZE} />
          <p className="header__link-text">About Me</p>
        </div>
      </Link>
      <hr className="hr-header" />
      <Link to="/contact" className="header__title">
        <div className="header__link">
          <ContactIcon color="white" size={ICON_SIZE} />
          <p className="header__link-text">Contact</p>
        </div>
      </Link>
      <hr className="hr-header" />
    </div>
    <div className="fa">
      <div className="fa-item">
        <a href="https://www.youtube.com/user/corymcaboy">
          <YoutubeIcon size={FA_SIZE} />
        </a>
      </div>
      <div className="fa-item">
        <a href="https://github.com/cmcaboy">
          <GithubIcon size={FA_SIZE} />
        </a>
      </div>
      <div className="fa-item">
        <a href="https://www.linkedin.com/in/cmcaboy">
          <LinkedInIcon size={FA_SIZE} />
        </a>
      </div>
      <div className="fa-item">
        <a href="https://www.facebook.com/cmcaboy">
          <FBIcon size={FA_SIZE} />
        </a>
      </div>
      <div className="fa-item">
        <a href="https://twitter.com/cmcaboy">
          <TwitterIcon size={FA_SIZE} />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
