import "../css/index.css";
import btn from "../assets/btn.svg";
import group6 from "../assets/groupsix.png";
import vol1 from "../assets/vol1.jpeg";
import vol2 from "../assets/vol2.jpeg";
import vol3 from "../assets/vol3.jpeg";
import vol4 from "../assets/vol4.jpeg";
// import vol5 from "../assets/vol5.jpeg";
// import vol6 from "../assets/vol6.jpeg";
import vol7 from "../assets/vol7.jpeg";
import vol8 from "../assets/vol8.jpeg";
export default function Volunteer() {
  return (
    <div
      style={{
        backgroundColor: "#F9F8FB",

        // overflow: "hidden",
        // marginTop: "200px",
      }}>
      <div className='grid-container' style={{ backgroundColor: "#F9F8FB", marginTop: "0", marginRight: "0" }}>
        <div className='grid-item' style={{ backgroundColor: "#F9F8FB" }}>
          <h3 className='heading1' style={{ backgroundColor: "#F9F8FB" }}>
            Volunteer
          </h3>
          <h1 className='heading2' style={{ backgroundColor: "#F9F8FB", fontSize: "40px" }}>
            Join over 100+ volunteers to make the world better
          </h1>
          <h4
            className='h4'
            style={{ lineHeight: "2.0", backgroundColor: "#F9F8FB" }}>
            Join our community to volunteer and help make the world a
            better place.
          </h4>
          <button
            className='frame-btn'
            style={{ backgroundColor: "#F9F8FB", marginBottom: "30px" }}>
            Get involved{" "}
            <img src={btn} alt='' style={{ backgroundColor: "transparent" }} />
          </button>
        </div>
        <div
          className='grid-item'
          style={{
            backgroundColor: "#F9F8FB",
            marginTop: "60px",
            marginLeft: "160px",
            marginRight: "0px",
          }}>
          <img src={group6} alt='' />
        </div>
      </div>
    </div>
  );
}
