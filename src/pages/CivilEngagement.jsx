import civilengagement from "../assets/civilengagement.jpeg";
import card1 from "../assets/civiccard1.png";
import card2 from "../assets/civiccard2.png";
import "./css/civil.css";
import arrow1 from "../assets/arrow1.svg";
import { Link } from "react-router-dom";
import youtube1 from "../assets/youtube1.jpeg";
import youtube2 from "../assets/youtube2.png";
import videoicon1 from "../assets/videoicon1.jpeg";
import videoicon2 from "../assets/videoicon2.jpeg";
import civicPalm from "../assets/civicPalm.jpeg";
import line from "./images/line.svg";
import Footer from "../components/Footer";
export default function CivilEngagement() {
  return (
    <>
      <div className='my-civil-container'>
        <div className='civil-img'>
          <img
            src={civilengagement}
            alt=''
            style={{
              width: "100%",
              height: "600px",
              flexShrink: "0",
              objectFit: "cover",
            }}
          />
        </div>
        <div className='civil-text'>
          <h2>Civic Education</h2>
          <h3>
            A guide to becoming a better <span>Citizen</span>. <br></br>Learn
            more, and become better.
          </h3>
        </div>
        <div className='first-inner-container'>
          <h2>
            {" "}
            <span>Civic</span> Engagement
          </h2>
          <h3>
            The civic engagement platform is brought to you by the Isodokan
            Foundation. It is the responsibility of every citizen of a country
            to know their civic rights and what to expect from the government in
            return. Our platform provides individuals with engaging information
            and facts on the civic responsibilities, virtues, citizenship and
            expectations of every Nigerian, you will learn relevant details to
            equip anyone interested in Nigeria with constitutionally-based
            knowledge
          </h3>
          <div className='first-grid'>
            <div className='grid-items'>
              <div className='card'>
                <img src={card1} alt='' className='card-img' />
                <h3> Civic Engagement</h3>
                <h4>
                  Support an afterschool programme to bolster basic literacy
                  interventions and provide additional critical learning
                  opportunities to students.
                </h4>
                <Link className='link'>
                  Read more <img src={arrow1} alt='' />
                </Link>
              </div>
              <div className='card'>
                <img src={card2} alt='' className='card-img' />
                <h3>Nigerians National Anthem</h3>
                <h4>
                  Support an afterschool programme to bolster basic literacy
                  interventions and provide additional critical learning
                  opportunities to students.
                </h4>
                <Link className='link'>
                  Read more <img src={arrow1} alt='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='second-inner-container'>
          <h2>
            {" "}
            <span>Self </span>Learning
          </h2>
          <div className='grid-items'>
            <div className='card'>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: "20px" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
              <h3>
                Basic Human Rights <span>0:30mins</span>
              </h3>
              <h4>
                Support an afterschool programme to bolster basic literacy
                interventions and provide additional critical learning
                opportunities to students.
              </h4>
            </div>
            <div className='card'>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: "20px" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
              <h3>
                The Nigerian Anthem <span>0:30mins</span>
              </h3>
              <h4>
                Support an afterschool programme to bolster basic literacy
                interventions and provide additional critical learning
                opportunities to students.
              </h4>
            </div>
            <div className='card'>
              {" "}
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: "20px" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
              <h3>
                The Nigerian Anthem <span>0:30mins</span>
              </h3>
              <h4>
                Support an afterschool programme to bolster basic literacy
                interventions and provide additional critical learning
                opportunities to students.
              </h4>
            </div>
          </div>
          <div className='grid-items'>
            <div className='card'>
              {" "}
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: "20px" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
              <h3>
                The Nigerian Anthem <span>0:30mins</span>
              </h3>
              <h4>
                Support an afterschool programme to bolster basic literacy
                interventions and provide additional critical learning
                opportunities to students.
              </h4>
            </div>
            <div className='card'>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: "20px" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
              <h3>
                Basic Human Rights <span>0:30mins</span>
              </h3>
              <h4>
                Support an afterschool programme to bolster basic literacy
                interventions and provide additional critical learning
                opportunities to students.
              </h4>
            </div>
            <div className='card'>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: "20px" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
              <h3>
                Basic Human Rights <span>0:30mins</span>
              </h3>
              <h4>
                Support an afterschool programme to bolster basic literacy
                interventions and provide additional critical learning
                opportunities to students.
              </h4>
            </div>
          </div>
          <button className='watch-more-btn'>
            Watch More{" "}
            <img
              src={arrow1}
              alt=''
              style={{
                background: "transparent",
                width: "28.18px",
                height: "33.405px",
              }}
            />
          </button>
        </div>
        <div className='third-inner-container'>
          <div className='grid-items'>
            <img src={civicPalm} alt='' />
          </div>
          <div className='grid-items'>
            <div className='left-items'>
              <h4>Pamphlet</h4>
              <h3>
                Download our <br></br>pamphlet and get to <br></br>learn more.
              </h3>
              <h5>
                This pamphlet provides individuals with engaging <br></br>
                information and facts on their civic responsibilities.
              </h5>
              <button>Download pamphlet </button>
            </div>
          </div>
        </div>
        <div className='fourth-inner-container'>
          <div className='form'>
            <h3>Frequently asked questions</h3>
            <img src='' alt='' />
            <h4>Find out more</h4>
            <label htmlFor=''>What is Citizenship?</label>
            <img
              src={line}
              alt=''
              style={{
                marginTop: "-20px",
                marginBottom: "10px",
                marginLeft: "-80px",
                width: "100%",
                height: "40px",
                background: "transparent",
              }}
            />
            <p>
              Citizenship is based upon the Constitution of the Federal Republic
              of Nigeria, dated 1989. Those born before or on the date of
              independence, October 1, 1960, whose parents or grandparents were
              born in Nigeria and who were legally residing in Nigeria at the
              time, are considered citizens of Nigeria.
            </p>
            <label htmlFor=''>How can one become a citizen of Nigeria?</label>
            <img
              src={line}
              alt=''
              style={{
                marginTop: "-20px",
                marginBottom: "10px",
                marginLeft: "-80px",
                width: "100%",
                height: "40px",
                background: "transparent",
              }}
            />
            <label htmlFor=''>What is the obligation of a Citizen?</label>
            <img
              src={line}
              alt=''
              style={{
                marginTop: "-20px",
                marginBottom: "10px",
                marginLeft: "-80px",
                width: "100%",
                height: "40px",
                background: "transparent",
              }}
            />
            <label htmlFor=''>How do you Vote in Nigeria?</label>
            <img
              src={line}
              alt=''
              style={{
                marginTop: "-20px",
                marginBottom: "10px",
                marginLeft: "-80px",
                width: "100%",
                height: "40px",
                background: "transparent",
              }}
            />
            <label htmlFor=''>How can one become a citizen of Nigeria?</label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
