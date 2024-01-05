// src/components/TodoItem.js
import React, { useState } from "react";
import imageBG from "../assets/fondo-1.jpg";
import videoBG from "../assets/video-1.mp4";
import "../styles/_hero.scss";
import VideoPlayer from "./VideoPlayer";
const Header = ({}) => {
  return (
    <section
      className="hero"
    //   style={{ backgroundImage: `url(${imageBG})` }}
    >
        {/* <img src={imageBG} alt="Hero SVRVS" className="hero__image" /> */}
        <VideoPlayer videoSrc={videoBG} ></VideoPlayer>
        <div className="hero__title glitch" data-text="Crecimiento">
            Crecimiento
        </div>
    </section>
  );
};

export default Header;
