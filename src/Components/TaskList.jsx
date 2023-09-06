import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskList } from "../Store/Slices/TaskSlice";

import EditTaskModal from "./Functions/EditTaskModal";
import DeleteTaskModal from "./Functions/DeleteTaskModal";

// Import the CSS module file
import styles from "./TaskList.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/AuthNavbar/Navbar";

// import Card from "./Cards/Card";
import TaskCard from "./Cards/Taskcard/Card";

const TaskList = () => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.task);
  const [id, setId] = useState();
  const [popup, setPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  console.log("tasks", task);

  useEffect(() => {
    dispatch(taskList());
  }, [dispatch]);

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <Navbar />

      {popup && <EditTaskModal id={id} popup={popup} setPopup={setPopup} />}
      {deletePopup && (
        <DeleteTaskModal
          id={id}
          deletePopup={deletePopup}
          setDeletePopup={setDeletePopup}
        />
      )}
      <h2 className={styles.taskListTitle}>Task List</h2>
      <Link to={"/addTask"}>
        <button className={styles.addButton}>Add Task</button>
      </Link>
      <Link to={"/login"}>
        <button className={styles.addButton}>login</button>
      </Link>
      <Link to={"/signup"}>
        <button className={styles.addButton}>signup</button>
      </Link>

      {/* <div className={styles.taskList}>
        {task &&
          task.map((data, i) => (
            <Card
              key={i}
              title={data.title}
              description={data.description}
              status={data.status}
              onUpdate={() => [setId(data._id), setPopup(true)]}
              onDelete={() => [setId(data._id), setDeletePopup(true)]}
            />
          ))}
      </div> */}
      <div className={styles.taskList}>
        {task &&
          task.map((data, i) => (
            <TaskCard
              key={i}
              title={data.title}
              description={data.description}
              status={data.status}
              assignedTo={data.assignedTo.username}
              onUpdate={() => [setId(data._id), setPopup(true)]}
              onDelete={() => [setId(data._id), setDeletePopup(true)]}
            />
          ))}
      </div>
    </>
  );
};

export default TaskList;
