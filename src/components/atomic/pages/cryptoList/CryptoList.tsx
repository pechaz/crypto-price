import { NumberUtil } from "../../../../utils";
import useCryptoList from "./useCryptoList";

const CryptoList = () => {
  const { priceList } = useCryptoList();

  return (
    <div className="w-full p-4">
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">Id</th>
            <th className="border border-slate-600">Price</th>
          </tr>
        </thead>
        <tbody>
          {priceList.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-600">{item.name}</td>
              <td className="border border-slate-600">{item.asset_id}</td>
              <td className="border border-slate-600">
                {NumberUtil.formatNumber(item.price_usd)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
