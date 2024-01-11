import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tour from "../Tour/Tour";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://travele-tourism-server.onrender.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> Our Upcoming Tours
      </h2>
      <p className="text-center fs-5">We try to provide the best experience posible. We prefer quality over anything.</p>
      <div className="container">
        <div className="row g-3">
          {isLoading ? ( //Checkif if is loading
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            tours.slice(0, 6).map((tour) => <Tour key={tour._id} tour={tour}></Tour>)
          )}
        </div>
        <Link to="/allTours" className="text-decoration-none">
          <button className="btn btn-primary d-block mx-auto">More Tours</button>
        </Link>
      </div>
    </div>
  );
};

export default Tours;
