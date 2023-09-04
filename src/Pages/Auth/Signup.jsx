import React from "react";
import styles from "./Signup.module.css"; 
import { Link } from "react-router-dom"; 

const Signup = () => {
  const handleSubmit = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.detailsSection}>
          <div className={styles.company}>
            <h1 className={styles.companyName}>Company Name</h1>
            <p className={styles.companyDescription}>
              If you are already part of our family, please login below.
            </p>
          </div>
          <Link to="/login" className={styles.loginBtn}>
            Login
          </Link>
        </div>
        <div className={styles.signupForm}>
          <h1 className={styles.formTitle}>Sign Up</h1>
          <form method="POST" onSubmit={handleSubmit}>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Full Name</label>
              <input
                className={styles.formField}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Email</label>
              <input
                className={styles.formField}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Password</label>
              <input
                className={styles.formField}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.formInput}>
              <label className={styles.formLabel}>Confirm Password</label>
              <input
                className={styles.formField}
                type="password"
                placeholder="Confirm Password"
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
