import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "auth/signup",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/users/signup", userData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Registration failed, please signup with valid credentials"
      );
    }
  }
);

export const activeUser = createAsyncThunk(
  "auth/active",
  async function (_, { rejectWithValue }) {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/v1/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Please log in");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/users/login", userData);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Login failed, enter valid username and password"
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async function () {
  localStorage.removeItem("token");
  return null;
});

const auth = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(activeUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { clearError } = auth.actions;

export default auth.reducer;
