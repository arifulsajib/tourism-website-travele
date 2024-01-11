import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const TourBooking = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState({});
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    fetch(`https://travele-tourism-server.onrender.com/tour/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, [tourId]);

  const onSubmit = (data) => {
    data.tourName = tour.name;
    console.log(data);
    fetch("https://travele-tourism-server.onrender.com/addBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Booking Successful");
        }
        reset();
      });
  };

  return (
    <div>
      <div className="service-detail container my-5 border bg-light shadow-lg rounded-3">
        <div className="row gy-5">
          <div className="col-12 col-md-5">
            <div className="p-3">
              <img className="w-100" src={tour?.pic} alt="" height="300" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="p-3">
              <h1 className="fw-extrabold blue-color">{tour?.name}</h1>
              <h6>
                <i className="fas fa-hand-holding-usd blue-color"></i> cost: {tour?.price}$ /person
              </h6>
              <h6>
                <i className="fas fa-clock blue-color"></i> Duration: {tour?.duration}
              </h6>
              <p className="fs-5">{tour?.details}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-5 text-center text-info">Please Enter your info to book this tour</h1>
      <div className="login-box container m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center mb-5">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name" className="form-label mt-3">
                Name:
              </label>
              <input {...register("name")} placeholder="Name" id="name" defaultValue={user?.displayName} className="p-2 form-control" />
              <br />

              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input readOnly {...register("email")} placeholder="Email" defaultValue={user?.email} className="p-2 form-control" />
              <br />

              <label htmlFor="address" className="form-label">
                Adrress:
              </label>
              <input {...register("address", { required: true })} placeholder="Address" className="p-2 form-control" />
              <br />

              <label htmlFor="phone" className="form-label">
                Phone No:
              </label>
              <input {...register("phone", { required: true })} placeholder="Phone No" className="p-2 form-control" />
              <br />

              <input {...register("tourId")} placeholder="Tour Id" hidden defaultValue={tourId} className="p-2 form-control" />
              <br />
              <input {...register("status")} placeholder="status" hidden defaultValue={"pending"} className="p-2 form-control" />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-info w-50 mb-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
