import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTask = createAsyncThunk("create task", async (data) => {
  const { title, description } = data;
  const response = await axios.post(
    "https://task-backend-zv5e.onrender.com/v1/task",
    {
      title,
      description,
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

export const taskList = createAsyncThunk("task list", async () => {
  const response = await axios.get(
    "https://task-backend-zv5e.onrender.com/v1/task",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

export const deleteTask = createAsyncThunk("delete", async (_id) => {
  const response = await axios.delete(
    `https://api-mste.onrender.com/api/tasks/${_id}`
  );
  try {
    const result = await response;
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
});
export const updateTask = createAsyncThunk("update task", async (data) => {
  const response = await axios.put(
    `https://api-mste.onrender.com/api/tasks/${data._id}`,
    data
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
  task: [],
  isLoading: false,
  error: false,
};

const taskDetails = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.task.push(action.payload);
    });
    builder.addCase(createTask.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(taskList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(taskList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.task = action.payload;
    });
    builder.addCase(taskList.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      const { id } = action.payload;
      if (id) {
        state.task = state.task.filter((data) => data.id !== id);
      }
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(updateTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.isLoading = false;

      const updatedIndex = state.task.findIndex(
        (data) => data._id === action.payload._id
      );
      if (updatedIndex !== -1) {
        state.task[updatedIndex] = action.payload;
      }
    });
    builder.addCase(updateTask.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default taskDetails.reducer;
