import { Link } from "react-router-dom";
import PriceChart from "./PriceChart";

function CryptoRow({ crypto }) {
  const isPositive = crypto.change >= 0;

  return (
    <Link 
      to={`/asset/${crypto.id}`} 
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center py-4 px-4 hover:bg-gray-50 border-t border-gray-100 transition-colors"
    >
      <div className="flex items-center gap-4 col-span-2 md:col-span-1">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xs">
          {crypto.symbol[0]}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{crypto.name}</h3>
          <p className="text-gray-500 text-sm hidden md:block">{crypto.symbol}</p>
        </div>
      </div>

      <div className="hidden md:block text-right md:text-left">
        <span className="font-medium">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>

      <div className={`hidden md:block text-right md:text-left font-medium ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
        {isPositive ? '+' : ''}{crypto.change}%
      </div>

      <div className="hidden lg:block">
        <div className="h-10 w-24">
          <PriceChart trend={crypto.change} />
        </div>
      </div>

      <div className="hidden md:flex justify-end">
        <button className="px-4 py-1.5 bg-green-600 text-white rounded-full font-semibold text-sm hover:bg-green-700 transition">
          Buy
        </button>
      </div>
    </Link>
  );
}

export default CryptoRow;
