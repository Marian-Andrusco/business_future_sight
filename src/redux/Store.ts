import { configureStore } from "@reduxjs/toolkit";
// import clothesReducer from "../learningPurposes/reduxSlices/ClothesSlice";
// import counterSlice from "../learningPurposes/reduxSlices/CounterSlice";

export const store = configureStore({
  reducer: {
    // clothesSlice: clothesReducer,
    // counterSlice: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
