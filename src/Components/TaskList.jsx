import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskList } from "../Store/Slices/TaskSlice";

import EditTaskModal from "./Functions/EditTaskModal";
import DeleteTaskModal from "./Functions/DeleteTaskModal";

// Import the CSS module file
import styles from "./TaskList.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/AuthNavbar/Navbar";

import TaskCardGpt from "./Cards/NotesCard/CardGpt";
import { Desktop } from "./Cards/desktop/Desktop";

const TaskList = () => {
  const dispatch = useDispatch();
  const { task, isLoading } = useSelector((state) => state.task);
  const [id, setId] = useState();
  const [popup, setPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  useEffect(() => {
    dispatch(taskList());
  }, [dispatch]);

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  const taskData = [
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "Complete",
      createdDate: "2023-09-04",
      updatedDate: "2023-09-05",
      assignedTo: "John Doe",
    },
    // Add more task objects as needed
  ];
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

      <div className={styles.taskList}>
        {/* {task &&
          task.map((data, i) => (
            <Card
              key={i}
              title={data.title}
              description={data.description}
              status={data.status}
              onUpdate={() => [setId(data._id), setPopup(true)]}
              onDelete={() => [setId(data._id), setDeletePopup(true)]}
            />
          ))} */}
      </div>
      <div className={styles.taskList}>
        {taskData.map((task) => (
          <TaskCardGpt
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            createdDate={task.createdDate}
            updatedDate={task.updatedDate}
            assignedTo={task.assignedTo}
            // onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>
      <Desktop />
    </>
  );
};

export default TaskList;
