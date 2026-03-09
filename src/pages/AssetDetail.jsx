import { useParams, Link } from "react-router-dom";
import { cryptoData } from "../data/cryptoData";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

function AssetDetail() {
  const { id } = useParams();
  const asset = cryptoData.find(c => c.id === id);

  if (!asset) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">Asset not found</h1>
          <Button to="/explore" variant="primary">Back to Explore</Button>
        </div>
        <Footer />
      </>
    );
  }

  const isPositive = asset.change >= 0;

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-6 flex items-center">
            <Link to="/explore" className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium">
              <span>←</span> Back to Explore
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Chart and Overview */}
            <div className="lg:col-span-2 space-y-6">
              <Card padding="p-0">
                <div className="p-6 md:p-8 border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-lg">
                       {asset.symbol[0]}
                     </div>
                     <div>
                       <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                         {asset.name} <span className="text-gray-500 font-medium text-xl">{asset.symbol}</span>
                       </h1>
                     </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                       ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`font-semibold text-lg ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                      {isPositive ? '+' : ''}{asset.change}% <span className="text-gray-400 text-sm font-normal">(24h)</span>
                    </div>
                  </div>

                  {/* Simulated large chart */}
                  <div className="h-64 w-full bg-gray-50 border border-gray-100 rounded-xl mt-4 relative flex items-center justify-center overflow-hidden">
                     <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                       <path 
                         d="M 0 50 Q 50 20 100 50 T 200 40 T 300 70 T 400 30" 
                         fill="none" 
                         stroke={isPositive ? "#16a34a" : "#ef4444"} 
                         strokeWidth="3" 
                         strokeLinecap="round" 
                       />
                       <path 
                         d="M 0 50 Q 50 20 100 50 T 200 40 T 300 70 T 400 30 L 400 100 L 0 100 Z" 
                         fill={isPositive ? "#16a34a" : "#ef4444"} 
                         fillOpacity="0.1"
                       />
                     </svg>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About {asset.name}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {asset.name} is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.
                    <br/><br/>
                    {asset.name} is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them.
                  </p>
                </div>
              </Card>
            </div>

            {/* Sidebar Data & Action Panel */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Trade {asset.symbol}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                     <div className="text-sm text-gray-500 font-medium mb-1">Buy</div>
                     <div className="text-2xl font-bold text-gray-900 flex justify-between">
                       <span>$0.00</span>
                       <span className="text-gray-400">USD</span>
                     </div>
                  </div>
                </div>

                <Button className="w-full !py-3 !bg-[#0052FF] hover:!bg-blue-700 font-bold mb-3" variant="primary">
                  Buy with USD
                </Button>
                
                <p className="text-center text-xs text-gray-500">
                  Secure transaction processed instantly
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">Market Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500">Market cap</span>
                    <span className="font-semibold text-gray-900">$1.2T</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500">Volume (24h)</span>
                    <span className="font-semibold text-gray-900">$42.5B</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500">Circulating supply</span>
                    <span className="font-semibold text-gray-900">19.5M {asset.symbol}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500">Popularity</span>
                    <span className="font-semibold text-gray-900">#1</span>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AssetDetail;
