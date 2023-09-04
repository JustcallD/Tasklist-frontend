import React from "react";
import styles from "./LandingPage.module.css";
// import Navbar from "../../Components/Navbar/AuthNavbar/Navbar";
import { FaTasks, FaUsers, FaChartBar } from "react-icons/fa"; // Import icons

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Task Management Reimagined</h1>
          <p className={styles.subtitle}>
            Streamline your work, collaborate effortlessly, and achieve more.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </header>
      <section className={styles.featureSection}>
        <div className={styles.feature}>
          <FaTasks className={styles.icon} />
          <h2 className={styles.featureTitle}>Task Organization</h2>
          <p className={styles.featureDescription}>
            Easily manage and organize your tasks.
          </p>
        </div>
        <div className={styles.feature}>
          <FaUsers className={styles.icon} />
          <h2 className={styles.featureTitle}>Team Collaboration</h2>
          <p className={styles.featureDescription}>
            Collaborate with your team in real-time.
          </p>
        </div>
        <div className={styles.feature}>
          <FaChartBar className={styles.icon} />
          <h2 className={styles.featureTitle}>Performance Analytics</h2>
          <p className={styles.featureDescription}>
            Monitor and analyze your team's performance.
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} TaskMaster - All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
