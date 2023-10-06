import React from "react";
import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="chase the new flavour" />
      <h1 className="app__header-h1">The key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus qui
        sint inventore ut accusamus?
      </p>
      <button type="button" className="custom__button">
        Explore Menu{" "}
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
