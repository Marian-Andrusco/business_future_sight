import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;

export const selectCounter = (state: RootState) => state.counterSlice.count;

export default counterSlice.reducer;
