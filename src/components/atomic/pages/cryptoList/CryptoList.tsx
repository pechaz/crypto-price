import { NumberUtil } from "../../../../utils";
import useCryptoList from "./useCryptoList";

const CryptoList = () => {
  const { priceList } = useCryptoList();

  return (
    <div className="p-4 flex flex-col">
      <div className="text-left w-full">
        <h3 className="text-lg font-semibold ml-3 text-slate-800">
          List of Crypto coin
        </h3>
        <p className="text-slate-500 mb-5 ml-3">Example of crypto list</p>
      </div>
      <div className="w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border overflow-hidden">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Name</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Id</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Price</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {priceList.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200">
                  <p className="block text-sm text-slate-800">{item.name}</p>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <p className="block text-sm text-slate-800">
                    {item.asset_id}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <p className="block text-sm text-slate-800">
                    {NumberUtil.formatNumber(item.price_usd)} $
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
