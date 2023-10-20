/* eslint-disable react/no-unescaped-entities */
import "../css/index.css";
import btn from "../assets/btn.svg";
import spurt from "../assets/spurt.svg";
import flower from "../assets/flower.png";
import groupOne from "../assets/groupOne.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FrameOne() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("https://isodokan.org/get-involved/");
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='grid-container'>
      <div className='grid-item'>
        <h2>
          Let's change lives & build the future <br></br>
          <span>together</span>
        </h2>
        <h4>
          Isọdọkan envisions a world where young people grow<br></br> up in
          safe, nurturing environments.{" "}
        </h4>
        <button className='frame-btn' onClick={handleNavigation}>
          Get involved <img src={btn} alt='' />
        </button>
        {!isSmallScreen && (
          <div className='partners-container'>
            <h5>Partnered :</h5>
            <img src={spurt} alt='' />
            <img src={flower} alt='' className='flower' />
          </div>
        )}
      </div>
      <div className='grid-item img-groupOne'>
        <img src={groupOne} alt='' />
      </div>
      {isSmallScreen && (
        <div className='partners-container'>
          <h5>Partnered :</h5>
          <img src={spurt} alt='step' />
          <img src={flower} alt='' className='flower' />
        </div>
      )}
    </div>
  );
}
