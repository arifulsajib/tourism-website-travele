import React from "react";
import introBanner from "../../../Images/tourGallery/gallery3.jpg";

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h2 className="fw-extrabold blue-color">A LITTLE SOMETHING ABOUT US</h2>
            <p className="fs-5">
              We’ve been creating life changing travel experiences for 18-40+ year olds. Our group tours are designed to help you connect, explore, taste and give back to the world, all whilst making a new crew of mates along the way.{" "}
            </p>
            <p className="fs-5">So you can relax and enjoy the absolute best of every destination we visit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
