import { configureStore } from "@reduxjs/toolkit";
import clothesReducer from "./ClothesSlice";
import counterSlice from "./CounterSlice";

export const store = configureStore({
  reducer: {
    clothesSlice: clothesReducer,
    counterSlice: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
