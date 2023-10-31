import AboutImg from "../assets/AboutImages.png";
import "../css/index.css";
import { Link } from "react-router-dom";
import arrow1 from "../assets/arrow1.svg";
export default function AboutUs() {
  return (
    <div
      className='about-container'
      style={{
        backgroundColor: "#F9F8FB",
        overflow: "hidden",
        padding: "10px",

        // height: "700px",
      }}>
      <div
        className='grid-container mobile-grid'
        style={{ backgroundColor: "#F9F8FB", marginTop: "50px" }}>
        <div className='grid-item' style={{ backgroundColor: "#F9F8FB" }}>
          <img
            src={AboutImg}
            alt='aboutus'
            style={{ backgroundColor: "#F9F8FB", maxWidth: "40%", marginLeft: "100px" }}
          />
        </div>
        <div
          className='grid-item2'
          style={{ backgroundColor: "#F9F8FB", marginLeft: "90px" }}>
          <div style={{ backgroundColor: "#F9F8FB" }}>
            <h5 style={{ backgroundColor: "#F9F8FB" }}>About us</h5>
            <h2 style={{ backgroundColor: "#F9F8FB" }}>
              How we are making a difference
            </h2>
            <h3
              style={{ backgroundColor: "#F9F8FB", textAlign: "start", fontSize : "17px", }}
              className='header3'>
              Isọdọkan envisions a world where young people grow up in safe,
              nurturing environment and runs with a mission to engender positive
              and sustainable changes in the lives of disadvantaged, underserved
              and underrepresented youth, especially those living in
              poverty-stricken communities. In so doing, our organization
              aspires to help shape better communities and break
              intergenerational cycles of poverty. We are founded on four core
              values;
            </h3>
            <div className='list-items' style={{ backgroundColor: "#F9F8FB" }}>
              <ul style={{ backgroundColor: "#F9F8FB" }}>
                <li style={{ backgroundColor: "#F9F8FB", fontSize : "17px" }}>Integrity</li>
                <li style={{ backgroundColor: "#F9F8FB", fontSize : "17px" }}>Partnership</li>
                <li style={{ backgroundColor: "#F9F8FB", fontSize : "17px" }}>Progress</li>
                <li style={{ backgroundColor: "#F9F8FB", fontSize : "17px" }}>Sustainability</li>
              </ul>
              <Link
                to='/learn-more'
                className='card-link'
                style={{
                  backgroundColor: "#F9F8FB",
                  marginLeft: "-15px",
                  fontSize: "20px",
                }}>
                Learn more{" "}
                <img
                  src={arrow1}
                  style={{
                    width: "30.18px",
                    height: "23.681px",
                    marginLeft: "-3px",
                    marginBottom: "-5px",
                    backgroundColor: "#F9F8FB",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
