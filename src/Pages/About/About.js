import React from "react";
import about1 from "../../Images/about/about1.jpg";
import about2 from "../../Images/about/about2.jpg";
import about3 from "../../Images/about/about3.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-center">About Us</h1>
      <div className="container overflow-hidden">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={about1} alt="" height="450" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={about2} alt="" height="500" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={about3} alt="" height="450" />
          </div>
        </div>
      </div>

      <div className="container my-5 d-flex flex-column align-items-center">
        <h2>WHO WE ARE!</h2>
        <h3 className="w-75 text-center">
          We’ve been creating life changing travel experiences for 18-40+ year olds. Our group tours are designed to help you connect, explore, taste and give back to the world, all whilst making a new crew of mates along the way. So you can relax
          and enjoy the absolute best of every destination we visit
        </h3>
        <h3 className="text-center blue-color mt-4">Visit us</h3>
        <p className="">
          <i className="blue-color fas fa-location-arrow"></i> Tupac Amaru 200 - Lima
        </p>
        <p>
          <i className="blue-color fas fa-phone"></i> +51 0123456789
        </p>
      </div>
    </div>
  );
};

export default About;
