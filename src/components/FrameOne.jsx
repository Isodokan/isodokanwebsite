/* eslint-disable react/no-unescaped-entities */
import "../css/index.css";
import btn from "../assets/btn.svg";
import spurt from "../assets/spurt.svg";
import flower from "../assets/flower.png";
import groupOne from "../assets/groupOne.png";
export default function FrameOne() {
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
        <button className='frame-btn'>
          Get involved <img src={btn} alt='' />
        </button>
        <div className='partners-container'>
          <h5>Partnered :</h5>
          <img src={spurt} alt='' />
          <img src={flower} alt='' className='flower' />
        </div>
      </div>
      <div className='grid-item'>
        {" "}
        <img src={groupOne} alt='' />
      </div>
    </div>
  );
}
