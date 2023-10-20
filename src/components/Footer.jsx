import "../css/index.css";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import footerline from "../assets/footerline.svg";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#0c1359" }}>
      <div className='footer-container'>
        <div
          className='left-content'
          style={{ marginLeft: "0", background: "transparent" }}>
          <h2 style={{ paddingTop: "50px" }}>Isọdọkan</h2>
          <h4>
            Isọdọkan envisions a world where young people grow<br></br>up in
            safe, nurturing environments.
          </h4>
          <div className='social-links'>
            <ul>
              <li>
                <img
                  src={insta}
                  alt=''
                  style={{ backgroundColor: "#0c1359" }}
                />
              </li>
              <li>
                <img
                  src={twitter}
                  alt=''
                  style={{ backgroundColor: "#0c1359" }}
                />
              </li>
              <li>
                <img
                  src={youtube}
                  alt=''
                  style={{ backgroundColor: "#0c1359", height: "20px" }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='middle-content' style={{ background: "transparent" }}>
          <h3 style={{ backgroundColor: "#0c1359" }}>About us</h3>
          <h2><a href="/contact-us" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Contact us</a></h2>
          <h2><a href="/get-involved" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Get involved</a></h2>
          <h2><a href="/terms-of-use" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Terms of use</a></h2>
          <h2><a href="/privacy-policy" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Privacy policy</a></h2>
        </div>
        <div className='right-content' style={{ background: "transparent" }}>
          <h3 style={{ backgroundColor: "#0c1359" }}>Support</h3>
          <h2><a href="/" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Donation portal</a></h2>
          <h2><a href="/" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Kajose</a></h2>
          <h2><a href="/" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>Project change</a></h2>
          <h2><a href="/" style={{ backgroundColor: "#0c1359", color: "#FFFFFF" }}>The neighbour giving circle</a></h2>
        </div>
      </div>
      <img src={footerline} alt='' className='footer-line' />
      <h4 className='footer-copyright'>
        Copyright © 2023 Isọdọkan Foundations | Powered by Isọdọkan <br></br>
        Foundations
      </h4>
    </div>
  );
}
