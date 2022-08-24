import { createSlice } from "@reduxjs/toolkit";
import {
  getRidesByToken,
  getRide,
  getAllRide,
  postRide,
  updateRide,
  deleteRide,
} from "./publishRideAPI";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  ride: [],
};

export const rideSlice = createSlice({
  name: "ride",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRidesByToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRidesByToken.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload
      })
      .addCase(getRidesByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ride = null;
      })
      .addCase(getRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRide.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload;
      })
      .addCase(getRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ride = null;
      })
      .addCase(getAllRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRide.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload;
      })
      .addCase(getAllRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ride = null;
      })
      .addCase(postRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRide.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = [ action.payload,...state.ride];
      })
      .addCase(postRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ride = null;
      })
      .addCase(updateRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRide.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = action.payload;
      })
      .addCase(updateRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ride = null;
      })
      .addCase(deleteRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRide.fulfilled, (state, action) => {
        console.log(action.data);
        state.isLoading = false;
        state.isSuccess = true;
        state.ride = state.ride.filter(item => item !== action.payload_id);
      })
      
      .addCase(deleteRide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ride = null;
      });
  },
});

export const { reset } = rideSlice.actions;
export default rideSlice.reducer;
