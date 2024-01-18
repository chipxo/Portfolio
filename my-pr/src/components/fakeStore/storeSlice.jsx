import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk(
  "fakeStore/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
);

const storeSlice = createSlice({
  name: "fakeStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default storeSlice.reducer;
