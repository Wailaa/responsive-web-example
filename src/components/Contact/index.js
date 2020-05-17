import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="blue-bg contact-form">
        <form>
          <div className="fullName">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <textarea className="password"></textarea>
          <div className="info">
            <small>Password must be eight characters in length.</small>
          </div>
          <div className="submit">
            <button>Create</button>
          </div>
        </form>
      </div>
      <div className="blue-bg ">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <div className="blue-bg">
        <h1>Our Mision</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <div className="blue-bg ">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <div className="blue-bg">
        <h1>Where to Find Us</h1>
        <p>Aviation Way 99 Los Angeles, USA</p>
      </div>
      <div className="blue-bg contact-details">
        <div>
          <h1>Write Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        <div>
          <h1>Call Us</h1>
          <p>0800 4521 800 50 </p>
          <p>0450 5896 625 16</p>
          <p>0798 6546 465</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
