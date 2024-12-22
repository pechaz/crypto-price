import { createSlice } from "@reduxjs/toolkit";

import { ICrypto } from "../models";

export interface ICryptoState {
  priceList: ICrypto[];
}

const initialState: ICryptoState = {
  priceList: [],
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    handleFreshList: (
      state,
      action: {
        payload: ICrypto[];
      }
    ) => {
      state.priceList = action.payload;
    },
    handleChangeItem: (
      state,
      action: {
        payload: {
          price: number;
          id: string;
        };
      }
    ) => {
      state.priceList = state.priceList.map((item) => {
        if (item.asset_id === action.payload.id) {
          item.price_usd = action.payload.price;
        }
        return item;
      });
    },
  },
});

export const { handleFreshList, handleChangeItem } = cryptoSlice.actions;
export default cryptoSlice.reducer;
