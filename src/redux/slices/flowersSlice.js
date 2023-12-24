import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFlowers = createAsyncThunk(
  'flowers/fetchFlowersStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6512cd7db8c6ce52b39641b2.mockapi.io/flowers?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

export const flowersSlice = createSlice({
  name: 'flower',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFlowers.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchFlowers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchFlowers.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const selectFlowerData = (state) => state.flowers;

export const { setItems } = flowersSlice.actions;

export default flowersSlice.reducer;
