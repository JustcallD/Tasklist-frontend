import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navbar/AuthNavbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
      const response = await axios.post(
        "http://localhost:4000/v1/auth/register",
        {
          username,
          email,
          password,
        },
        { headers }
      );
      const data = response.data;
      console.log(data);
      navigate("/login");
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
          <div className={styles.company}>
            <h1 className={styles.companyName}>Company Name</h1>
            <p className={styles.companyDescription}>
              If you are already part of our family, please login below.
            </p>
          </div>
          <Link to="/login" className={styles.detailsSectionbtn}>
            Login
          </Link>
        </div>
        <div className={styles.signupForm}>
          <h1 className={styles.formTitle}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Full Name</label>
              <input
                className={styles.formField}
                type="text"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Email</label>
              <input
                className={styles.formField}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Password</label>
              <input
                className={styles.formField}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Confirm Password</label>
              <input
                className={styles.formField}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={styles.formBtn}>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
