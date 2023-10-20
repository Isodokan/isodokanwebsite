import "../css/index.css";
import hero from "../assets/hero.svg";
import { useState } from "react";

export default function Hero() {
  const [textVisible, setTextVisible] = useState(true);
  const [mobileTextVisible, setMobileTextVisible] = useState(true);

  const handleSvgClick = () => {
    setTextVisible(false);
    const heroSection = document.querySelector(".hero-section");
    heroSection.style.backgroundColor = "transparent";
    const gridSection = document.querySelector(".grid-container");
    gridSection.style.marginTop = "10px";
  };

  const handleMobileSvgClick = () => {
    setMobileTextVisible(false);
    const heroSection = document.querySelector(".mobile-hero");
    heroSection.style.backgroundColor = "transparent";
  };

  return (
    <div>
      <div className='hero-section'>
        {textVisible && (
          <h2>
            This here is for simple notifications you want your users to get
            aware of. It is easily removeable when users click on the close icon
            <img
              src={hero}
              alt=''
              className='hero-svg'
              onClick={handleSvgClick}
            />
          </h2>
        )}
      </div>

      <div className='mobile-hero'>
        {mobileTextVisible && (
          <h2>
            This here is for simple notifications, it can be removed easily.
            <img
              src={hero}
              alt=''
              className='hero-svg'
              onClick={handleMobileSvgClick}
            />
          </h2>
        )}
      </div>
    </div>
  );
}
