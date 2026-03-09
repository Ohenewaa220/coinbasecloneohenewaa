import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = {
    company: ["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Investors", "Vendors", "Legal & privacy", "Cookie policy", "Cookie preferences", "Digital Asset Disclosures"],
    individuals: ["Buy & sell", "Earn free crypto", "Base App", "Coinbase One", "Debit card"],
    businesses: ["Asset Listings", "Coinbase Business", "Payments", "Commerce", "Token Manager"],
    institutions: ["Prime", "Staking", "Exchange", "International Exchange", "Derivatives Exchange", "Verified Hubs"],
    developers: ["Developer Platform", "Base", "Server Wallets", "Embedded Wallets", "Base Accounts (smart wallets)", "Onramp & Offramp", "W430", "Trade API", "Paymaster", "OrchainKit", "Data API", "Verifications", "Node", "AgentKit", "Staking", "Faucet", "Exchange API", "International Exchange API", "Prime API", "Derivatives API"],
    support: ["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods", "Account access", "Supported crypto", "Status"],
    learn: ["Explore", "Market statistics", "Coinbase Bytes newsletter", "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates", "What is Bitcoin?", "What is crypto?", "What is a blockchain?", "How to set up a crypto wallet?", "How to send crypto?", "Taxes"],
    assetPrices: ["Bitcoin price", "Ethereum price", "Solana price", "XRP price"],
    stockPrices: ["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"]
  };

  return (
    <footer className="bg-[#fcfbfc] border-t border-gray-100 pt-16 pb-8 text-[#5b616e]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer */}
        <div className="text-center text-[10px] sm:text-xs mb-16 mx-auto max-w-4xl text-[#8a919e] font-medium leading-relaxed">
          OEX trading is offered by Coinbase Bermuda Technologies Ltd.<br className="hidden sm:block" />
          Products and features may not be available in all regions. Information is for an informational purposes only and is not in an offer, or<br className="hidden sm:block" />
          solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or ($)<br className="hidden sm:block" />
          interactions provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="text-[#0052FF] flex items-center mb-6">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#0052FF"/>
                <path d="M24 13C20.134 13 17 16.134 17 20C17 23.866 20.134 27 24 27C24.5772 27 25.1378 26.9298 25.6723 26.8016C24.1252 28.751 21.7212 30 19 30C13.4772 30 9 25.5228 9 20C9 14.4772 13.4772 10 19 10C21.7212 10 24.1252 11.249 25.6723 13.1984C25.1378 13.0702 24.5772 13 24 13Z" fill="white"/>
              </svg>
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Company</h3>
            <ul className="space-y-3 mb-10">
              {footerLinks.company.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Individuals</h3>
            <ul className="space-y-3 mb-10">
              {footerLinks.individuals.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Businesses</h3>
            <ul className="space-y-3 mb-10">
              {footerLinks.businesses.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Institutions</h3>
            <ul className="space-y-3">
              {footerLinks.institutions.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Developers</h3>
            <ul className="space-y-3">
              {footerLinks.developers.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Support</h3>
            <ul className="space-y-3 mb-10">
              {footerLinks.support.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Asset prices</h3>
            <ul className="space-y-3 mb-10">
              {footerLinks.assetPrices.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Stock prices</h3>
            <ul className="space-y-3">
              {footerLinks.stockPrices.map(link => (
                <li key={link}><a href="#" className="hover:text-[#0052FF] hover:underline inline-block text-[14px]">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 mt-4 text-[14px] font-medium text-[#8a919e]">
           <div className="flex items-center gap-6 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} Coinbase</span>
              <a href="#" className="hover:text-[#0052FF]">Privacy</a>
              <a href="#" className="hover:text-[#0052FF]">Terms & Conditions</a>
           </div>
           
           <div className="flex items-center gap-2 cursor-pointer hover:text-[#0052FF]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Global • English</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
