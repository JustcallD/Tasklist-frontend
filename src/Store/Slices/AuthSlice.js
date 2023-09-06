import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk("login", async (data) => {
  const { email, password } = data;
  const response = await axios.post(
    "https://task-backend-zv5e.onrender.com/v1/task",
    {
      email,
      password,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // Add any other headers you may need
      },
    }
  );

  try {
    const result = await response;
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  authData: [],
  isLoading: false,
  error: false,
};

const Auth = createSlice({
  name: "Authentication",
  initialState,
  extraReducers: (builder) => {},
});
