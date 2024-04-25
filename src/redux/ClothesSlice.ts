import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

type clothesData = {
  id: number;
  title: string;
  category: string;
  price: number;
  status: string;
};

type clothes = {
  clothes: clothesData[];
};

const initialState: clothes = { clothes: [] };

const clothesSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setClothes: (state, action: PayloadAction<clothesData[]>) => {
      state.clothes = action.payload;
    },
  },
});

export const { setClothes } = clothesSlice.actions;

export const selectClothes = (state: RootState) => state.clothesSlice;

export default clothesSlice.reducer;
