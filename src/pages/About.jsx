import aboutpage from "../assets/aboutpage.png";
import btn from "../assets/btn.svg";
import "./css/about.css";
import aboutimg from "../assets/aboutimg.png";
import vision from "../assets/vision.jpeg";
import aboutimg2 from "./images/aboutimg2.png";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <div className='container'>
        <div className='img'>
          <img
            src={aboutpage}
            alt=''
            style={{ width: "100%", paddingLeft: "0", objectFit: "cover" }}
          />
        </div>
        <div className='my-text-area'>
          <h1>About us</h1>
          <h3>
            <span>Isọdọkan</span> is a yoruba word meaning ecumenical,
            comprehensive or<br></br> universal.
          </h3>
          <button>
            Get involved <img src={btn} alt='' style={{ color: "#FFFFFF" }} />
          </button>
        </div>
        <div className='my-overal-container'>
          <h4>Our Values</h4>
          <h3 style={{ lineHeight: "1.0" }}>
            Our values describe who we are, and what we do every<br></br>day and
            the basis of our identity{" "}
          </h3>
          <div className='grid-container' style={{ marginLeft: "200px" }}>
            <div className='grid-item'>
              <div className='card card1'>
                <h2>
                  {" "}
                  <span>P</span>artnership
                </h2>
                <h4>
                  At Isodokan, our main goal is to assist our users in
                  maintaining financial control without having to panic or
                  become frustrated when a need arises.
                </h4>
              </div>
              <div className='card card2'>
                <h2 style={{ marginTop: "2px" }}>
                  {" "}
                  <span style={{ marginLeft: "2px", marginRight: "-10px" }}>
                    S
                  </span>
                  ustainability
                </h2>
                <h4>
                  We are a team dedicated to providing the best possible service
                  to our community. We always want to be your go-to partner,
                  with an easy-to-use, user-friendly interface, amazing customer
                  support and feedback, and quick, safe, and reliable
                  transactions.
                </h4>
              </div>
            </div>
            <div className='grid-item'>
              <div className='card card3'>
                <h2>
                  {" "}
                  <span
                    style={{
                      color: "#FFF",
                      marginLeft: "-170px",
                      marginRight: "-5px",
                      fontSize: "100px",
                      backgroundColor: "#0C1359",
                    }}>
                    I
                  </span>
                  ntegrity
                </h2>
                <h4>
                  We place a high value on ensuring that Isodokan can perform
                  its functions for creation without being hampered in any way.
                  We want our users to be able to trust us to always have their
                  best interests at heart by providing them with the most
                  up-to-date information on savings and investments, while
                  achieving the F.R.E.E. life.
                </h4>
              </div>
              <div className='card card4'>
                <h2 style={{ marginTop: "2px" }}>
                  {" "}
                  <span>P</span>rogress
                </h2>
                <h4>
                  One of Isodokan core values is having easy access to all of
                  our services. Our users can use both the web and the mobile
                  application to access our services. We also provide physical
                  support to our users to help them bridge the digital divide
                  blah blah.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className='Our Mission'>
          <div className='grid-container'>
            <div className='grid-item'>
              <div>
                <h2 style={{ fontSize: "36px" }}>
                  <span
                    style={{
                      wordSpacing: "2em",
                      fontSize: "36px",
                      paddingRight: "8px",
                    }}>
                    Our
                  </span>
                  Mission
                </h2>
              </div>

              <h4
                style={{
                  color: "#888",
                  textAlign: "start",
                  fontSize: "20px",
                  lineHeight: "1.5",
                }}>
                Isọdọkan’s mission is to engender positive and sustainable
                changes in the lives of disadvantaged, underserved and
                underrepresented youth, especially those living in poverty
                stricken communities. In so doing, our organization aspires to
                help shape better communities and break intergenerational cycles
                of poverty.
                <br></br>
                <br></br>
                In order to achieve this, we develop programs targeted at youth
                in disadvantaged and/or poverty-stricken areas that:
              </h4>
              <div className='my-list-items'>
                <ul>
                  <li>Increase access to education</li>
                  <li>Create new economic opportunities</li>
                  <li>Provide intervention meals to feed the hungry</li>
                  <li>Provide basic housing through self-assisted projects</li>
                  <li>
                    Provide access to basic healthcare services and insurance
                    programs
                  </li>
                  <li>
                    Provide a platform for self-development and opportunity to
                    create a future for themselves
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='grid-item'
              style={{ marginLeft: "160px", marginTop: "70px" }}>
              <img src={aboutimg} alt='' />
            </div>
          </div>
        </div>
        <div className='our-vision'>
          <h2>Our Vision</h2>
          <h4>
            Isọdọkan envisions a world where young people grow up in safe,
            nurturing environments, Isọdọkan<br></br> envisions a world where
            young people grow up in safe, nurturing environments, Isọdọkan
            envisions a<br></br> world where young people grow up in safe,
            nurturing environments,{" "}
          </h4>
          <img src={vision} alt='' style={{ width: "100%", height: "982px" }} />
        </div>
        <div className='our-philo'>
          <img src={aboutimg2} alt='' />
          <div className='container-card'>
            <div className='inner-container-card'>
              <div className='card'>
                <h3>
                  {" "}
                  <span>Our</span> Philosophy{" "}
                </h3>
                <h4>
                  Our philosophy in developing these programs recognizes the
                  complex interconnectedness of individuals, communities,
                  corporations, and political bodies. Working with
                  non-governmental organizations (NGO’s), and other non-profit
                  groups aligned with our mission, we undertake an inclusive
                  approach that involves community leaders, local businesses,
                  global corporations and governing officials in implementing
                  programs.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
