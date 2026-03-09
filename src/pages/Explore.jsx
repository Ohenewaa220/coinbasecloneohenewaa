import { cryptoData } from "../data/cryptoData";
import CryptoRow from "../components/crypto/CryptoRow";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/**
 * Explore Page Component
 * Displays a comprehensive list of all available cryptocurrencies.
 * Reuses the CryptoRow component for consistent data presentation.
 */
function Explore() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore the Cryptoeconomy</h1>
            <p className="text-gray-500">Discover new assets, keep track of them in one place, and stay informed on prices.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-gray-200">
               <h2 className="text-xl font-bold text-gray-900">All Assets</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-gray-500 text-sm py-4 px-4 font-medium border-b border-gray-100 bg-gray-50">
              <div className="col-span-1">Name</div>
              <div className="hidden md:block text-right md:text-left">Price</div>
              <div className="hidden md:block text-right md:text-left">Change</div>
              <div className="hidden lg:block">Chart</div>
              <div className="text-right">Trade</div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {cryptoData.map((crypto) => (
                <CryptoRow key={crypto.id} crypto={crypto} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
