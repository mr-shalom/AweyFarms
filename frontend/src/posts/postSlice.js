import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async function (_, { rejectWithValue }) {
    try {
      const res = axios.get("/api/vi/posts");
      if (!res.data.length > 0) return [];
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to load all posts, please log in"
      );
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.get(`/api/v1/post/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get post, please log in"
      );
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async function (newPost, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/post", newPost);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to create new post, please log in"
      );
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async function ({ id, newPostUpdate }, { rejectWithValue }) {
    try {
      const res = await axios.patch(`/api/v1/post/${id}`, newPostUpdate);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update post, please log in"
      );
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.delete(`/api/v1/post/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete post, please log in"
      );
    }
  }
);

const post = createSlice({
  name: "post",
  initialState: {
    loading: false,
    error: null,
    posts: [],
    post: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        localStorage.setItem("posts", action.payload);
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getPost.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createPost.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updatePost.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.post = action.payload;
        state.error = action.payload;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default post.reducer;
