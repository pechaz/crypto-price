import { SocketHook } from "../../hooks";
import { CryptoListPage } from "../atomic/pages";

const App = () => {
  SocketHook();

  return <CryptoListPage />;
};

export default App;
