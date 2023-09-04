import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navbar/AuthNavbar/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      // Pass the email and password data in the request body
      const response = await axios.post(
        "http://localhost:4000/v1/auth/login",
        {
          email,
          password,
        },
        { headers }
      );
      const data = response.data;
      console.log(data);

      localStorage.setItem("accessToken", data.token);
      if (response.status === 422 || !data) {
        console.log("Invalid credential");
      } else {
        navigate("/");
      }
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.subContainer}>
        <div className={styles.detailsSection}>
          <div className={styles.company}>Company Name</div>
          <div className={styles.moto}>
            Join us and be a part of our community.
          </div>
          <Link to="/signup" className={styles.detailsSectionbtn}>
            Join Us
          </Link>
        </div>
        <div className={styles.loginForm}>
          <h1 className={styles.loginFormTitle}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.loginFormInput}>
              <label className={styles.loginFormLable}>Email</label>
              <input
                className={styles.loginFormInput}
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.loginFormInput}>
              <label className={styles.loginFormLable}>Password</label>
              <input
                className={styles.loginFormInput}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={styles.loginFormbtn}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
