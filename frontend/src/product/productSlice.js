import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//load all products on the database
export const loadAllProducts = createAsyncThunk(
  "products/loadAllProducts",
  async function (_, { rejectWithValue }) {
    try {
      const res = await axios.get("/api/v1/products");
      if (res.data.length > 0) return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.message || "Failed to fetch products"
      );
    }
  }
);

//find single product from the database
export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.get(`/api/v1/products/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch product"
      );
    }
  }
);

//upload new product to database
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async function (newProduct, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/products", newProduct);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to upload new product"
      );
    }
  }
);

//update product on database
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async function ({ id, dataToUpdate }, { rejectWithValue }) {
    try {
      const res = await axios.patch(`/api/v1/products/${id}`, dataToUpdate);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update product"
      );
    }
  }
);

//Delete Product from Database
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.delete(`/api/v1/products/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  }
);

const products = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    products: [],
    product: null,
  },
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loadAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(loadAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(loadProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = {
            ...state.products[index],
            ...action.payload,
          };
        } else {
          state.products.push(action.payload);
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default products.reducer;
