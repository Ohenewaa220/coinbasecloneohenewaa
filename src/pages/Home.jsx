import { Link } from "react-router-dom";
import Button from "../components/common/Button";

function Home() {
  const customCryptos = [
    { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 746723.75, change: 2.75 },
    { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 21784.11, change: 3.09 },
    { id: 'tether', symbol: 'USDT', name: 'Tether', price: 10.78, change: 0.00 },
    { id: 'bnb', symbol: 'BNB', name: 'BNB', price: 6868.07, change: 2.57 },
    { id: 'xrp', symbol: 'XRP', name: 'XRP', price: 14.72, change: 1.15 },
    { id: 'usdc', symbol: 'USDC', name: 'USDC', price: 10.78, change: 0.00 },
  ];

  return (
    <>
      <div className="bg-white">
        
        {/* 1. Hero Section (Image 1) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <div className="flex-1 w-full flex justify-center md:justify-start">
            {/* Blue App Container Mockup */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] bg-gradient-to-br from-[#0052FF] to-[#0135ac] rounded-[48px] overflow-hidden shadow-2xl flex items-end justify-center px-4 md:px-8 pt-12 md:pt-16">
               <div className="w-full h-[95%] bg-white rounded-t-[32px] shadow-lg relative flex flex-col pt-6 px-6">
                 {/* Decorative pill at top of 'screen' */}
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-200 rounded-full"></div>
                 
                 <div className="mt-4 flex justify-between items-center mb-6">
                    <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <div className="bg-gray-100 rounded-full px-4 py-1.5 flex items-center gap-2">
                       <span className="font-semibold text-sm">C</span>
                       <span className="text-gray-400 text-xs">Search</span>
                    </div>
                    <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                 </div>

                 <div className="mb-6">
                   <div className="text-[32px] font-bold text-[#0a0b0d] tracking-tight">$33,683.80</div>
                   <div className="text-[#098551] font-semibold text-[14px] flex items-center gap-1">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                     $131.36 (1.38%) 1D &gt;
                   </div>
                 </div>

                 {/* Simulated Graph */}
                 <div className="h-24 w-full relative mb-6">
                    <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible preserveAspectRatio='none'">
                      <path d="M 0 50 Q 20 40 40 45 T 80 30 T 120 35 T 160 20 T 200 5" fill="none" stroke="#0052FF" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M 0 50 Q 20 40 40 45 T 80 30 T 120 35 T 160 20 T 200 5 L 200 60 L 0 60 Z" fill="#0052FF" fillOpacity="0.1"/>
                      {/* End point dot */}
                      <circle cx="200" cy="5" r="4" fill="#0052FF" />
                      <circle cx="200" cy="5" r="8" fill="#0052FF" fillOpacity="0.2" />
                    </svg>
                 </div>

                 {/* Time filters */}
                 <div className="flex justify-between text-[11px] font-semibold text-[#8a919e] mb-6 px-2">
                   <span>1H</span><span className="text-[#0052FF] bg-blue-50 px-2 rounded-md">1D</span><span>1W</span><span>1M</span><span>1Y</span><span>ALL</span>
                 </div>

                 {/* List Items */}
                 <div className="flex-1 overflow-hidden space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3"><div className="w-6 h-6 bg-gray-100 rounded-full"></div><span className="font-semibold text-[15px]">Crypto</span></div>
                      <span className="font-medium text-[15px]">$14,186.12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3"><div className="w-6 h-6 bg-gray-100 rounded-full"></div><span className="font-semibold text-[15px]">Stocks</span></div>
                      <span className="font-medium text-[15px]">$8,133.98</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3"><div className="w-6 h-6 bg-gray-100 rounded-full"></div><span className="font-semibold text-[15px]">Derivatives</span></div>
                      <span className="font-medium text-[15px] text-[#098551]">↗ $148.84</span>
                    </div>
                 </div>
               </div>
            </div>
            <div className="text-[10px] text-[#8a919e] mt-2 absolute bottom-2 left-4 md:left-20">Stocks and prediction markets not available in your jurisdiction.</div>
          </div>

          <div className="flex-1 w-full max-w-xl md:max-w-none md:pr-10 lg:pr-20">
            <h1 className="text-[40px] leading-[1.1] sm:text-[56px] lg:text-[72px] font-semibold tracking-tight text-[#0a0b0d] mb-4 font-sans">
              The future of<br/>finance is here<span className="animate-pulse">|</span>
            </h1>
            <p className="text-[17px] text-[#5b616e] font-medium mb-8">
              Trade crypto and more on a platform you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[420px]">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="satoshi@nakamoto.com" 
                  className="w-full px-4 py-3.5 border border-[#d8d8d8] rounded-[24px] focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] text-[15px] font-medium placeholder:text-[#8a919e] hover:border-[#8a919e] transition-colors"
                  required
                />
              </div>
              <Button type="button" variant="primary" className="!bg-[#0052FF] hover:!bg-[#0045d8] !rounded-full !px-8 !py-3.5 !text-[15px] font-semibold whitespace-nowrap">
                Sign up
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f4]"></div>

        {/* 2. Explore Crypto Section (Image 2 - Top) */}
        <section className="bg-[#f4f5f6]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid md:grid-cols-2 gap-16 items-center">
             <div className="max-w-md mx-auto md:mx-0">
               <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#0a0b0d] mb-4">
                 Explore crypto like Bitcoin, Ethereum, and Dogecoin.
               </h2>
               <p className="text-[16px] text-[#5b616e] font-medium mb-8">
                 Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
               </p>
               <Button variant="primary" to="/explore" className="!bg-[#0a0b0d] hover:!bg-[#0a0b0d]/80 !rounded-full !px-6 !py-3 !text-[15px]">
                 See more assets
               </Button>
             </div>

             <div className="bg-[#0a0b0d] rounded-[32px] p-6 text-white shadow-xl max-w-lg mx-auto w-full">
               <div className="flex gap-6 mb-6 text-[13px] font-semibold text-[#8a919e] border-b border-[#2b2b2b] pb-4">
                 <span className="text-white">Tradable</span>
                 <span>Top gainers</span>
                 <span>New on Coinbase</span>
               </div>
               
               <div className="space-y-1">
                 {customCryptos.map((coin) => (
                   <div key={coin.id} className="flex justify-between items-center py-3 hover:bg-[#1a1b1d] px-2 -mx-2 rounded-xl transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${coin.symbol === 'BTC' ? 'bg-[#f7931a]' : coin.symbol === 'ETH' ? 'bg-[#627eea]' : coin.symbol === 'USDT' ? 'bg-[#26a17b]' : coin.symbol === 'BNB' ? 'bg-[#f3ba2f]' : 'bg-[#2775ca]'}`}>{coin.symbol[0]}</div>
                        <span className="font-semibold text-[17px]">{coin.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-[15px]">GHS {coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        <div className={`text-[13px] font-medium flex items-center justify-end gap-1 ${coin.change > 0 ? 'text-[#098551]' : 'text-[#8a919e]'}`}>
                           {coin.change > 0 && <span>↗</span>}
                           {coin.change.toFixed(2)}%
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* 3. Advanced Trading Section (Image 2 - Bottom) */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16">
            <div className="flex-1 flex justify-center w-full">
               <div className="bg-[#0a0b0d] rounded-[32px] w-full max-w-[500px] aspect-[16/11] flex items-center justify-center p-6 sm:p-10 shadow-xl overflow-hidden relative">
                  {/* Simulating Advanced Trading Charts interface via CSS layout blocks */}
                  <div className="w-[85%] h-[80%] bg-[#1a1b1d] rounded-lg border border-[#30333b] p-4 flex gap-4 absolute left-8 top-12 shadow-2xl rotate-[-2deg]">
                     <div className="flex-1 flex flex-col gap-2">
                        {/* Fake candles */}
                        <div className="flex-1 border-b border-[#30333b] flex items-end gap-1 overflow-hidden opacity-50">
                           <div className="w-2 h-12 bg-red-500 rounded-sm"></div><div className="w-2 h-24 bg-green-500 rounded-sm"></div><div className="w-2 h-16 bg-red-500 rounded-sm"></div><div className="w-2 h-32 bg-green-500 rounded-sm"></div><div className="w-2 h-20 bg-green-500 rounded-sm"></div><div className="w-2 h-10 bg-red-500 rounded-sm"></div><div className="w-2 h-40 bg-green-500 rounded-sm"></div><div className="w-2 h-28 bg-red-500 rounded-sm"></div>
                        </div>
                        <div className="h-8 bg-[#2b2b2b] rounded-sm"></div>
                     </div>
                  </div>
                  <div className="w-[30%] h-[90%] bg-[#1a1b1d] rounded-lg border border-[#30333b] p-2 flex flex-col gap-2 absolute right-8 top-6 shadow-2xl rotate-[1deg]">
                      <div className="h-4 w-1/2 bg-[#2b2b2b] rounded mx-auto mb-2"></div>
                      <div className="h-3 w-full bg-red-500/20 rounded"></div><div className="h-3 w-full bg-red-500/40 rounded"></div><div className="h-3 w-full bg-red-500/60 rounded"></div>
                      <div className="h-6 w-full font-bold text-center text-green-500 text-xs mt-2">$64,302.10</div>
                      <div className="h-3 w-full bg-green-500/60 rounded"></div><div className="h-3 w-full bg-green-500/40 rounded"></div><div className="h-3 w-full bg-green-500/20 rounded"></div>
                  </div>
               </div>
            </div>

            <div className="flex-1 max-w-md mx-auto md:mx-0 w-full md:pl-10">
               <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#0a0b0d] mb-4">
                 Powerful tools, designed<br/>for the advanced trader.
               </h2>
               <p className="text-[14px] text-[#5b616e] font-medium leading-relaxed mb-8">
                 Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
               </p>
               <Button variant="primary" to="/signin" className="!bg-[#0a0b0d] hover:!bg-[#0a0b0d]/80 !rounded-full !px-6 !py-3 !text-[15px]">
                 Start trading
               </Button>
             </div>
          </div>
        </section>

        {/* 4. Coinbase One + Base App (Image 3) */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 flex flex-col gap-12 sm:gap-24">
            
            {/* Top row: Coinbase One */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16">
              <div className="flex-1 max-w-md mx-auto md:mx-0 w-full md:pr-10">
                 <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#5b616e] mb-4 uppercase bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                    <svg viewBox="0 0 40 40" className="w-4 h-4" fill="none"><path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#5b616e"/><path d="M24 13C20.134 13 17 16.134 17 20C17 23.866 20.134 27 24 27C24.5772 27 25.1378 26.9298 25.6723 26.8016C24.1252 28.751 21.7212 30 19 30C13.4772 30 9 25.5228 9 20C9 14.4772 13.4772 10 19 10C21.7212 10 24.1252 11.249 25.6723 13.1984C25.1378 13.0702 24.5772 13 24 13Z" fill="white"/></svg>
                    Coinbase One
                 </div>
                 <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#0a0b0d] mb-4">
                   Zero trading fees,<br/>more rewards.
                 </h2>
                 <p className="text-[14px] text-[#5b616e] font-medium leading-relaxed mb-8">
                   Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
                 </p>
                 <Button variant="primary" to="/signup" className="!bg-[#0a0b0d] hover:!bg-[#0a0b0d]/80 !rounded-full !px-6 !py-3 !text-[15px]">
                   Claim free trial
                 </Button>
              </div>

              <div className="flex-1 flex justify-center w-full">
                <div className="w-full max-w-[500px] aspect-[16/11] bg-[#efeff4] rounded-[32px] flex items-end justify-center px-12 pt-12 overflow-hidden shadow-inner">
                   <div className="w-56 bg-white rounded-[24px] h-[95%] shadow-[0_10_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center pt-8 px-4 relative mt-auto translate-y-8">
                     <div className="w-16 h-16 bg-[#0052FF] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-md relative">
                       ✓
                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rotate-45"></div>
                     </div>
                     <h3 className="text-[19px] font-bold text-center mb-1">Trade successful!</h3>
                     <p className="text-[13px] text-gray-500 text-center mb-10">You spent $100.00 BTC</p>
                     
                     <div className="w-[110%] absolute bottom-[4.5rem] bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex justify-between items-center z-10">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold">C1</div>
                            <div className="text-[12px] font-bold text-[#0a0b0d]">No trading fees with Coinbase One</div>
                        </div>
                     </div>
                     <div className="w-full h-24 bg-[#efeff4] rounded-t-xl absolute bottom-0 left-0"></div>
                   </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Base App */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16">
              <div className="flex-1 flex justify-center w-full order-2 md:order-1">
                <div className="w-full max-w-[500px] aspect-[16/11] bg-[#efeff4] rounded-[32px] flex items-end justify-center px-12 pt-12 overflow-hidden shadow-inner relative">
                   <div className="w-56 bg-white rounded-[24px] h-[95%] shadow-[0_10_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col pt-3 px-3 relative mt-auto translate-y-8 z-10 overflow-hidden">
                      <div className="flex justify-between items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden text-[8px] flex items-center justify-center"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop" alt="" className="w-full h-full object-cover"/></div>
                        <div className="text-[13px] font-bold border-b-2 border-black pb-1">Trade</div>
                        <div className="text-[13px] text-gray-400 pb-1">Earn</div>
                      </div>
                      <div className="flex-1 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-400 to-yellow-300 relative overflow-hidden mb-3">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-xl border-2 border-white"></div>
                         <div className="absolute top-1/2 left-[60%] bg-white rounded-full px-2 py-1 text-[11px] font-bold flex items-center gap-1 shadow-md">
                           <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px]">!</span> $5.00
                         </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5 flex items-center gap-2 mb-3 border border-gray-100">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">VP</div>
                         <div className="flex-1">
                            <div className="text-[12px] font-bold leading-tight">Virtual Protocol</div>
                            <div className="text-[10px] text-gray-500">$0.0042</div>
                         </div>
                         <div className="text-[12px] text-green-500 font-bold">+25.54%</div>
                      </div>
                      <div className="flex justify-around items-center border-t border-gray-100 pt-3 pb-2 text-gray-400">
                        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex-1 max-w-md mx-auto md:mx-0 w-full md:pl-10 order-1 md:order-2">
                 <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#5b616e] mb-4 uppercase bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                    Base App
                 </div>
                 <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#0a0b0d] mb-4">
                   Countless ways to earn crypto with the Base App.
                 </h2>
                 <p className="text-[14px] text-[#5b616e] font-medium leading-relaxed mb-8">
                   An everything app to trade, create, discover, and chat, all in one place.
                 </p>
                 <Button variant="primary" to="/explore" className="!bg-[#0a0b0d] hover:!bg-[#0a0b0d]/80 !rounded-full !px-6 !py-3 !text-[15px]">
                   Learn more
                 </Button>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Learn Crypto Section (Image 4 - Top) */}
        <section className="bg-[#fcfbfc] py-20 lg:py-32 border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#0a0b0d] mb-6">
                    New to crypto?<br/>Learn some crypto basics
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:col-start-3 text-left lg:text-right">
                  <div className="text-[15px] text-[#5b616e] font-medium mb-6">
                    Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
                  </div>
                  <Button variant="primary" to="/learn" className="!bg-[#0a0b0d] hover:!bg-[#0a0b0d]/80 !rounded-full !px-6 !py-3 !text-[15px]">
                     Read More
                  </Button>
                </div>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {/* Article 1 */}
                <div className="group cursor-pointer">
                   <div className="aspect-[3/2] rounded-2xl bg-[#0a0b0d] overflow-hidden mb-6 flex items-center justify-center p-8">
                      <div className="w-24 h-24 border-[3px] border-blue-500 rounded-full flex items-center justify-center text-blue-500 text-3xl font-bold shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        $
                      </div>
                   </div>
                   <h3 className="text-[19px] font-semibold text-[#0a0b0d] mb-3 group-hover:text-[#0052FF] transition-colors line-clamp-2 leading-tight">
                     USDC: The digital dollar for the global crypto economy
                   </h3>
                   <p className="text-[15px] text-[#5b616e] font-medium line-clamp-3">
                     Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable.
                   </p>
                </div>

                {/* Article 2 */}
                <div className="group cursor-pointer">
                   <div className="aspect-[3/2] rounded-2xl bg-[#e3e8f0] overflow-hidden mb-6 flex items-center justify-center p-8">
                      <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col items-center justify-center gap-4">
                         <div className="w-16 h-12 bg-gray-200 rounded-lg shrink-0"></div>
                         <div className="flex justify-center gap-2"><div className="w-8 h-8 bg-blue-500 rounded-md"></div><div className="w-8 h-8 bg-black rounded-md"></div><div className="w-8 h-8 bg-blue-500 rounded-md"></div></div>
                      </div>
                   </div>
                   <h3 className="text-[19px] font-semibold text-[#0a0b0d] mb-3 group-hover:text-[#0052FF] transition-colors line-clamp-2 leading-tight">
                     Can crypto really replace your bank account?
                   </h3>
                   <p className="text-[15px] text-[#5b616e] font-medium line-clamp-3">
                     If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term "bankless" — the idea being that you can use crypto to replace traditional banking.
                   </p>
                </div>

                {/* Article 3 */}
                <div className="group cursor-pointer">
                   <div className="aspect-[3/2] rounded-2xl bg-[#e3e8f0] overflow-hidden mb-6 flex items-center justify-center p-8">
                      <div className="text-center">
                         <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">₿</div>
                         <div className="w-32 h-2 bg-gray-300 rounded-full mx-auto mb-2"></div>
                         <div className="w-40 h-2 bg-gray-300 rounded-full mx-auto"></div>
                      </div>
                   </div>
                   <h3 className="text-[19px] font-semibold text-[#0a0b0d] mb-3 group-hover:text-[#0052FF] transition-colors line-clamp-2 leading-tight">
                     When is the best time to invest in crypto?
                   </h3>
                   <p className="text-[15px] text-[#5b616e] font-medium line-clamp-3">
                     Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause a decline in value.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 6. Final CTA Section (Image 4 - Bottom) */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
             <div className="max-w-md mx-auto md:mx-0">
               <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#0a0b0d] mb-4">
                 Take control<br/>of your money
               </h2>
               <p className="text-[16px] text-[#5b616e] font-medium mb-8">
                 Start your portfolio today and discover crypto
               </p>
               <div className="flex flex-col sm:flex-row gap-3">
                 <div className="relative flex-1">
                   <input 
                     type="email" 
                     placeholder="satoshi@nakamoto.com" 
                     className="w-full px-4 py-3.5 border border-[#d8d8d8] rounded-[24px] focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] text-[15px] font-medium placeholder:text-[#8a919e]"
                     required
                   />
                 </div>
                 <Button type="button" variant="primary" className="!bg-[#0052FF] hover:!bg-[#0045d8] !rounded-full !px-8 !py-3.5 !text-[15px] font-semibold whitespace-nowrap">
                   Sign up
                 </Button>
               </div>
             </div>

             <div className="flex justify-center relative min-h-[300px]">
                {/* Circular arrangement of logos */}
                <div className="w-24 h-24 bg-[#0a0b0d] rounded-full absolute left-1/4 top-0 z-10 flex items-center justify-center text-white text-4xl font-bold shadow-[0_4px_24px_rgba(0,0,0,0.1)]">^</div>
                
                <div className="w-32 h-32 bg-[#0052FF] rounded-full absolute left-4 top-1/4 z-10 flex items-center justify-center text-white shadow-[0_4px_24px_rgba(0,82,255,0.2)]">
                  <svg viewBox="0 0 40 40" fill="none" className="w-16 h-16">
                    <path d="M24 13C20.134 13 17 16.134 17 20C17 23.866 20.134 27 24 27C24.5772 27 25.1378 26.9298 25.6723 26.8016C24.1252 28.751 21.7212 30 19 30C13.4772 30 9 25.5228 9 20C9 14.4772 13.4772 10 19 10C21.7212 10 24.1252 11.249 25.6723 13.1984C25.1378 13.0702 24.5772 13 24 13Z" fill="white"/>
                  </svg>
                </div>
                
                <div className="w-28 h-28 bg-[#f7931a] rounded-full absolute left-1/3 top-[40%] text-white text-[56px] font-bold flex items-center justify-center z-20 shadow-[0_4px_24px_rgba(247,147,26,0.2)]">₿</div>
                
                <div className="w-20 h-20 bg-[#f3ba2f] rounded-full absolute right-16 top-1/4 flex items-center justify-center text-white text-2xl font-bold font-serif -rotate-45 shadow-[0_4px_16px_rgba(243,186,47,0.2)]">→</div>
                
                <div className="w-24 h-24 bg-[#c2a633] rounded-full absolute left-1/4 bottom-0 flex items-center justify-center text-white text-4xl font-serif shadow-sm">Đ</div>
                
                <div className="w-24 h-24 bg-[#627eea] rounded-full absolute right-1/4 bottom-[10%] flex items-center justify-center text-white text-5xl shadow-sm">
                  <svg viewBox="0 0 32 32" className="w-12 h-12" fill="currentColor"><path d="M15.925 23.969L15.875 23.969 15.875 31.969 16.05 31.969 23.825 20.45 15.925 23.969Z" opacity=".6"></path><path d="M15.925 23.969L8.15 20.45 15.925 31.969 15.925 23.969Z"></path><path d="M15.925 15.485L15.875 15.485 15.875 22.545 16.05 22.545 23.8 19.38 15.925 15.485Z" opacity=".6"></path><path d="M15.925 15.485L8.175 19.38 15.925 22.545 15.925 15.485Z"></path><path d="M15.925 0L15.875 0 15.875 14.28 16.05 14.28 23.8 18.23 15.925 0Z" opacity=".6"></path><path d="M15.925 0L8.175 18.23 15.925 14.28 15.925 0Z"></path></svg>
                </div>
                
                <div className="w-16 h-16 bg-[#000000] rounded-full absolute right-8 top-1/2 flex items-center justify-center shadow-lg">
                  <div className="grid grid-cols-3 gap-1"><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-blue-500 rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-blue-500 rounded-full"></div><div className="w-1 h-1 bg-blue-500 rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div></div>
                </div>
             </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;
