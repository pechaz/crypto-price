import { useSelector } from "react-redux";

import { IRootState } from "../../../../redux/store";
import { AssetHook } from "../../../../hooks";

const useCryptoList = () => {
  const { priceList } = useSelector((state: IRootState) => state.crypto);
  AssetHook.useGetAssets();

  return { priceList };
};

export default useCryptoList;
