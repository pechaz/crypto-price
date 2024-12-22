import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../redux/store";
import { handleChangeItem } from "../redux/crypto";
import { ICryptoSocketData } from "../models";

const SOCKET = new WebSocket(process.env.REACT_APP_SOCKET_URL!);

const useSocket = () => {
  const { priceList } = useSelector((state: IRootState) => state.crypto);
  const dispatch = useDispatch();

  SOCKET.onmessage = (message) => {
    const data = JSON.parse(message.data) as ICryptoSocketData;
    const simpleArray = data.symbol_id.split("_");
    const cryptoItem = priceList.find((item) =>
      simpleArray.includes(item.asset_id)
    );

    if (cryptoItem) {
      dispatch(
        handleChangeItem({
          id: cryptoItem.asset_id,
          price: data.price,
        })
      );
    }
  };

  useEffect(() => {
    console.log("####$$$");
    SOCKET.onopen = () => {
      const query = {
        type: "subscribe",
        heartbeat: false,
        apikey: process.env.REACT_APP_TOKEN,
        subscribe_data_type: ["trade"],
        subscribe_filter_asset_id: ["BTC/USD", "ETH/USD"],
        // subscribe_filter_symbol_id: ["BTC", "ETH"],
      };
      SOCKET.send(JSON.stringify(query));
    };

    return () => {
      SOCKET.close();
      SOCKET.onclose = () => {
        const query = {
          type: "unsubscribe",
          heartbeat: false,
          apikey: process.env.REACT_APP_TOKEN,
          subscribe_data_type: ["trade"],
          subscribe_filter_asset_id: ["BTC/USD", "ETH/USD"],
          // subscribe_filter_symbol_id: ["BTC", "ETH"],
        };
        SOCKET.send(JSON.stringify(query));
      };
    };
  }, []);
};

export default useSocket;
