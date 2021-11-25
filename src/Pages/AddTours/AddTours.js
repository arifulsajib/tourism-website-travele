import React from "react";
import { useForm } from "react-hook-form";

const AddTours = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://lit-river-98467.herokuapp.com/addTour", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          alert("Tour added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1 className="mt-5 text-center blue-color">Add Tours</h1>
      <div className="login-box container m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center mb-5">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name" className="form-label mt-3">
                Tour Name:
              </label>
              <input {...register("name", { required: true })} placeholder="Name" id="name" className="p-2 form-control" />
              <br />

              <label htmlFor="duration" className="form-label">
                Duration:
              </label>
              <input type="number" {...register("duration", { required: true })} placeholder="Duration" className="p-2 form-control" />
              <br />

              <label htmlFor="address" className="form-label">
                Cost:
              </label>
              <input type="number" {...register("price", { required: true })} placeholder="Cost" className="p-2 form-control" />
              <br />

              <label htmlFor="details" className="form-label">
                Tour details:
              </label>
              <textarea {...register("details", { required: true })} placeholder="Tour details" className="p-2 form-control" />
              <br />

              <label htmlFor="pic" className="form-label">
                Pic url:
              </label>
              <input {...register("pic", { required: true })} placeholder="Pic url" className="p-2 form-control" />
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

export default AddTours;
