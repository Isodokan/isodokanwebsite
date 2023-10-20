/* eslint-disable react/no-unescaped-entities */

import contact from "../assets/contact.png";

import "react-phone-number-input/style.css";

import "./css/contact.css";
import Footer from "../components/Footer";
export default function Contact() {
  const gradientBackground = {
    background:
      "linear-gradient(276deg, rgba(0, 0, 0, 0.64) 42.59%, rgba(234, 138, 11, 0.24) 138.62%)",
    zIndex: 1, // Set the z-index to 1
  };
  return (
    <>
      <div className='container'>
        <div className='image'>
          <img
            src={contact}
            alt=''
            style={{
              width: "100%",
              marginTop: "0",
              paddingLeft: "0",
              objectFit: "cover",
              height: "500px",
              gradientBackground,
            }}
          />
        </div>
        <div className='text-area'>
          <h1>Contact us</h1>
          <h3>
            Let's start something great <span>together</span>,<br></br>we'd love
            to hear from you.
          </h3>
        </div>
      </div>
      <div className='page-grid-container'>
        <div className='grid-item'>
          <h3>
            Get in{" "}
            <span
              className='my-text'
              style={{
                fontSize: " 36px",
              }}>
              touch
            </span>
          </h3>
          <div>
            <h4>Phone</h4>
            <h5>Call us: 0809-384-4444</h5>
            <h4>Email</h4>
            <h5>Mail us: Isodokan@gmail.com </h5>
            <h4>Address</h4>
            <h5>16, Lekki, opposite rainbow bus-stop, Lagos, Nigeria</h5>
          </div>
        </div>
        <div className='grid-item'>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='Full Name'>Full Name</label>
              <input type='text' placeholder='Shedrack Ohagor' />
            </div>
            <div className='form-group'>
              <label htmlFor='Email address'>Email address</label>
              <input type='email' placeholder='oyindamola@gmail.com' />
            </div>
            <div className='form-group'>
              <label htmlFor='Phone number'>Phone number</label>

              <input
                type='text'
                placeholder='Enter your phone number'
                className='phone-number'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Message'>Message</label>
              <textarea
                type='text'
                placeholder='I would love to know how I can......'
              />
            </div>
            <div>
              <label htmlFor='Message'>How did you hear about us? *</label>
              <div className='btns'>
                {" "}
                <button>Email</button>
                <button>LinkedIn</button>
                <button>Online Webinar</button>
              </div>
              <div className='btns'>
                {" "}
                <button>Twitter</button>
                <button>Referral</button>
                <button>Others</button>
              </div>
            </div>
            <h4 style={{ color: "#888" }}>Attach File</h4>
            <button className='submit-btn'>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
