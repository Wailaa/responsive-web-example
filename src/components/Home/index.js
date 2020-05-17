import React from "react";
import { Link } from "react-router-dom";
import Pic from "../../images/zebra-logo-png.png";

function Home() {
  return (
    <div className="home">
      <div className="yellow-bg yellowPic">
        <img alt="zebra" src={Pic} />
      </div>
      <div className="yellow-bg yellow-span">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Con nonummy sem integer interdum volutpat dis eget eligendi
          aliquip dolorum magnam. Lorem ipsum dolor si amet taciti sunt torquent
          ipsam proin montes quia netus quo minima sint.
        </p>
      </div>
      <div className="yellow-bg yellow-span">
        <h1>Our Mision</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Con nonummy sem integer interdum volutpat dis eget eligendi
          aliquip dolorum magnam. Lorem ipsum dolor si amet taciti sunt torquent
          ipsam proin montes quia netus quo minima sint.
        </p>
      </div>
      <div className="yellow-bg home-header">
        <h1>Home Header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Con nonummy sem integer interdum volutpat dis eget eligendi
          aliquip dolorum magnam. Lorem ipsum dolor si amet taciti sunt torquent
          ipsam proin montes quia netus quo minima sint.
        </p>
      </div>

      <div className="green-bg home-about">
        <Link to="/about">
          <div>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Con nonummy sem integer interdum volutpat dis eget
              eligendi aliquip dolorum magnam. Lorem ipsum dolor si amet taciti
              sunt torquent ipsam proin montes quia netus quo minima sint.
            </p>
          </div>
        </Link>
      </div>

      <div className="orange-pink-bg home-services">
        <Link to="/services">
          <div>
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Con nonummy sem integer interdum volutpat dis eget
              eligendi aliquip dolorum magnam. Lorem ipsum dolor si amet taciti
              sunt torquent ipsam proin montes quia netus quo minima sint.
            </p>
          </div>
        </Link>
      </div>
      <div className="blue-bg home-contact">
        <Link to="/contact">
          <div>
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
