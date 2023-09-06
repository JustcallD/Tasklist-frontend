import { IoIosArrowDropdown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>{props.title}</div>
        <button className={styles.cardPop}>
          <IoIosArrowDropdown className={styles.icon} />
        </button>
      </div>
      <div className={styles.cardSection}>{props.description}</div>
      <div className={styles.cardFooter}>
        <div className={styles.statusSection}>
          <h5>Status:{props.status}</h5>
          <span></span>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.userName}>
            Assigned to : {props.assignedTo}
          </div>
          <button className={styles.date}>
            <CiCalendarDate size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
