import React from "react";
import { Link } from "react-router-dom";

const Tour = (props) => {
  const { _id, name, price, pic, details, duration } = props.tour;

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <img src={pic} className="card-img-top" alt="..." height="200" />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <p>{details.substr(0, 120)}</p>
            <h6 className="mb-3">
              <i className="fas fa-clock blue-color"></i> Duration: {duration} days
            </h6>
            <h6 className="mb-3">
              <i className="fas fa-hand-holding-usd blue-color"></i> Cost: {price}$ /person
            </h6>
            <Link to={`/tour/${_id}`} className="text-decoration-none">
              <button className="default-btn d-block mx-auto">Booking</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
