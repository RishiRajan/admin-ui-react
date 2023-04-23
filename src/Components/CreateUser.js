import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Createuser() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Please Enter the Username";
      } else if (values.username.length < 3) {
        errors.username = "Length should be Greater than 3";
      } else if (values.username.length > 15) {
        errors.username = "Length should be Less than 15";
      }

      if (!values.email) {
        errors.email = "Please Enter the Email";
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Please Enter valid Email";
      }

      if (!values.country) {
        errors.country = "Please Enter the country";
      }

      if (!values.state) {
        errors.state = "Please Enter the state";
      }

      if (!values.city) {
        errors.city = "Please Enter the city";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          "https://6445838f914c816083d0844d.mockapi.io/users/v1/users",
          values
        );
        navigate("/portal/userlist");
      } catch (error) {
        alert("Validation Error");
        setLoading(false);
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={myFormik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label for="">Name</label>
            <input
              type="text"
              name="username"
              value={myFormik.values.username}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.username ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
          </div>
          <div className="col-lg-6">
            <label for="">E-Mail</label>
            <input
              type="text"
              name="email"
              value={myFormik.values.email}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.email ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>

          <div className="col-lg-4">
            <label for="">Country</label>
            <input
              type="text"
              name="country"
              value={myFormik.values.country}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.country ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div>
          <div className="col-lg-4">
            <label for="">State</label>
            <input
              type="text"
              name="state"
              value={myFormik.values.state}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.state ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
          </div>
          <div className="col-lg-4">
            <label for="">City</label>
            <input
              type="text"
              name="city"
              value={myFormik.values.city}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.city ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>

          <div className="col-lg-3 mt-3">
            <input
              type="submit"
              disabled={isLoading}
              value={isLoading ? "creating..." : "Create"}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
