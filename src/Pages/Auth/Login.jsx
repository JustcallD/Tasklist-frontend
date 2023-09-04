import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <div className={styles.container}>
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
          <form method="POST" onSubmit={handleSubmit}>
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
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={styles.loginFormbtn}>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
