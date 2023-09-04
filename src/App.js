import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import DeleteTaskModal from "./Components/Functions/DeleteTaskModal";
import EditTaskModal from "./Components/Functions/EditTaskModal";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
// import Home from "./Pages/About/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/" element={<TaskList />} />
        <Route path="/delete" element={<DeleteTaskModal />} />
        <Route path="/update/:id" element={<EditTaskModal />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
