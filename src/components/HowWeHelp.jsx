import "../css/index.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { Link } from "react-router-dom";
import arrow1 from "../assets/arrow1.svg";
// import ellipse from "../assets/ellipse.svg";
export default function HowWeHelp() {
  return (
    <div className='container'>
      <h4>How we help</h4>
      <h3>
        Here is how we help to give support to<br></br> the society and the
        needy
      </h3>
      <div className='inner-grid'>
        <div className='card'>
          <img src={card1} alt='' className='card-image' />
          <h2>Project for Change</h2>
          <h3>
            Support an afterschool programme to bolster basic literacy
            interventions and provide additional critical learning opportunities
            to students.
          </h3>
          <Link to='/learn-more' className='card-link'>
            Learn more{" "}
            <img
              src={arrow1}
              style={{
                width: "30.18px",
                height: "23.681px",
                marginLeft: "-3px",
                marginBottom: "-5px",
              }}
            />
          </Link>
        </div>
        <div className='card'>
          <img
            src={card2}
            alt=''
            className='card-image'
            style={{ maxWidth: "100%" }}
          />
          <h2>Kajọse</h2>
          <h3>
            Support an afterschool programme to bolster basic literacy
            interventions and provide additional critical learning opportunities
            to students.
          </h3>
          <Link to='/learn-more' className='card-link'>
            Learn more{" "}
            <img
              src={arrow1}
              style={{
                width: "30.18px",
                height: "23.681px",
                marginLeft: "-3px",
                marginBottom: "-5px",
              }}
            />
          </Link>
        </div>
        <div className='card '>
          <img src={card3} alt='' className='card-image' />
          <h2>The Neighbouring Circle</h2>
          <h3>
            Support an afterschool programme to bolster basic literacy
            interventions and provide additional critical learning opportunities
            to students.
          </h3>
          <Link to='/learn-more' className='card-link'>
            Learn more{" "}
            <img
              src={arrow1}
              style={{
                width: "30.18px",
                height: "23.681px",
                marginLeft: "-3px",
                marginBottom: "-5px",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
