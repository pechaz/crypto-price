import { AxiosResponse } from "axios";

import { axiosApi } from "./config";
import { ICrypto } from "../models";

export const getAssets = (): Promise<AxiosResponse<ICrypto[], any>> => {
  return axiosApi.get(`assets`, {
    params: {
      filter_asset_id: "BTC;ETH;XRP;BNB;SOL;ADA;TRX;TON;SHIB;BCH",
    },
  });
};
