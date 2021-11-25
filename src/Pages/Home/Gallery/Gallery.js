import React from "react";
import "./Gallery.css";
import gallery1 from "../../../Images/tourGallery/gallery1.jpg";
import gallery2 from "../../../Images/tourGallery/gallery2.jpg";
import gallery3 from "../../../Images/tourGallery/gallery3.jpg";
import gallery4 from "../../../Images/tourGallery/gallery4.jpg";
import gallery5 from "../../../Images/tourGallery/gallery5.jpg";
import gallery6 from "../../../Images/tourGallery/gallery6.jpg";

const Gallery = () => {
  return (
    <div className="container gallery">
      <h2 className="text-center blue-color mb-4">Latest Tour Gallery</h2>
      <div class="row">
        <div class="col-12 col-lg-4 col-md-6">
          <img src={gallery1} class="w-100 shadow-1-strong rounded mb-4" height="250" alt="" />
        </div>
        <div class="col-12 col-lg-4 col-md-6">
          <img src={gallery2} class="w-100 shadow-1-strong rounded mb-4" height="250" alt="" />
        </div>
        <div class="col-12 col-lg-4 col-md-6">
          <img src={gallery3} class="w-100 shadow-1-strong rounded mb-4" height="250" alt="" />
        </div>
        <div class="col-12 col-lg-4 col-md-6">
          <img src={gallery4} class="w-100 shadow-1-strong rounded mb-4" height="250" alt="" />
        </div>
        <div class="col-12 col-lg-4 col-md-6">
          <img src={gallery5} class="w-100 shadow-1-strong rounded mb-4" height="250" alt="" />
        </div>
        <div class="col-12 col-lg-4 col-md-6">
          <img src={gallery6} class="w-100 shadow-1-strong rounded mb-4" height="250" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
