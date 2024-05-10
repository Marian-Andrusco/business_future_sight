import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { Tclothes } from "../TypesAndInterfaces/types";
// import axios from "axios";
// import { Tclothes } from "../TypesAndInterfaces/types";

export type clothes = {
  loading: boolean;
  clothes: Tclothes[];
  error: string | undefined;
};

const initialState: clothes = {
  loading: false,
  clothes: [],
  error: "",
};

// export const fetchClothes = createAsyncThunk("search", () => {
//   return axios
//     .get("http://localhost:3500/clothes")
//     .then((res) => res.data.map((cloth: Tclothes) => cloth));
// .catch((err) => {
//   console.log(err);
//   throw err;
// });
// });
// export const fetchClothes2 = createAsyncThunk("search", async () => {
//   return fetch("http://localhost:3500/clothes").then((res) => res.json);
// });

const clothesSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setClothes: (state, action: PayloadAction<Tclothes[]>) => {
      state.clothes = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchClothes.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchClothes.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.clothes = action.payload;
  //     state.error = "";
  //   });
  //   builder.addCase(
  //     fetchClothes.rejected,
  //     (state, action: PayloadAction<any>) => {
  //       state.loading = false;
  //       state.clothes = [];
  //       state.error = action.payload;
  //     }
  //   );
  // },
});

export const { setClothes } = clothesSlice.actions;

export const selectClothes = (state: RootState) => state.clothesSlice;

export default clothesSlice.reducer;
