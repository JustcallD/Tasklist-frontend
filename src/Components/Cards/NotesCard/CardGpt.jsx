import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./TaskCard.module.css";

const TaskCard = (props) => {
  const {
    title,
    description,
    status,
    createdDate,
    updatedDate,
    assignedTo,
    onDelete,
    onUpdate,
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const getStatusColor = () => {
    switch (status) {
      case "Open":
        return "#3498db";
      case "In Progress":
        return "#f39c12";
      case "Complete":
        return "#27ae60";
      default:
        return "#3498db";
    }
  };

  return (
    <div className={`${styles.taskCard} ${styles.shadow}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.options} onClick={toggleOptions}>
          <div className={`${styles.option} ${styles.dot}`}></div>
          <div className={`${styles.option} ${styles.dot}`}></div>
          <div className={`${styles.option} ${styles.dot}`}></div>
        </div>
      </div>
      {showOptions && (
        <div className={styles.optionButtons}>
          <button
            onClick={onDelete}
            className={`${styles.iconButton} ${styles.deleteButton}`}
          >
            <FaTrash /> Delete
          </button>
          <button
            onClick={onUpdate}
            className={`${styles.iconButton} ${styles.editButton}`}
          >
            <FaEdit /> Edit
          </button>
        </div>
      )}
      <p className={styles.description}>{description}</p>
      <div className={styles.statusContainer}>
        <div className={styles.statusText}>{`Status: ${status}`}</div>
        <div
          className={styles.statusIndicator}
          style={{ backgroundColor: getStatusColor() }}
        ></div>
      </div>
      <div className={styles.dates}>
        <div className={styles.date}>
          Created: {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className={styles.date}>
          Updated: {new Date(updatedDate).toLocaleDateString()}
        </div>
      </div>
      <div className={styles.assignedTo}>Assigned to: {assignedTo}</div>
    </div>
  );
};

export default TaskCard;
