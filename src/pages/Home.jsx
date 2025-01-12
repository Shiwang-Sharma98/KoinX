import React, { useState, useEffect } from "react";
import TradingViewChart from "../components/TradingViewChart";
import TrendingCoins from "../components/TrendingCoins";
import KoinXBanner from "../components/KoinXBanner";
import BitcoinStats from "../components/BitcoinStats";
import Sentiment from "../components/Sentiment";
import BitcoinInfo from "../components/BitcoinInfo";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/team";
import CryptoCarousel from "../components/CryptocurrencyCarouselComponent";

const Home = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  // Wrapper component for scrollable sections
  const ScrollableSection = ({ children, minWidth = "600px" }) => (
    <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
      <div className={`min-w-[${minWidth}] sm:min-w-full px-3 sm:px-0`}>
        {children}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 bg-gray-50 min-h-screen overflow-x-hidden">
      <div className="mb-4">
        <div className="text-gray-500 text-xs sm:text-sm">
          <span className="font-medium">Cryptocurrencies</span> &gt;&gt;{" "}
          <span className="font-semibold text-black">Bitcoin</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 w-full overflow-x-hidden">
          <div className="bg-white rounded-lg p-3 sm:p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-4">
              <img
                src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                alt="Bitcoin"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <h1 className="text-xl sm:text-2xl font-bold">Bitcoin</h1>
              <span className="text-gray-500 text-sm sm:text-base font-medium">BTC</span>
              <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs sm:text-sm font-medium">
                Rank #1
              </span>
            </div>

            {bitcoinData && (
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-bold">
                  ${bitcoinData.usd.toLocaleString()}
                </div>
                <div className="text-base sm:text-lg text-gray-700 mt-1">
                  ₹ {bitcoinData.inr.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div
                    className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm flex items-center gap-0.5 text-sm ${
                      bitcoinData.usd_24h_change >= 0
                        ? "text-green-600 bg-green-50"
                        : "text-red-600 bg-red-50"
                    }`}
                  >
                    {bitcoinData.usd_24h_change >= 0 ? "▲" : "▼"}
                    {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}%
                  </div>
                  <span className="text-gray-500 text-sm">(24H)</span>
                </div>
              </div>
            )}

            <ScrollableSection>
              <TradingViewChart />
            </ScrollableSection>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block">
          <div className="space-y-6">
            <ScrollableSection minWidth="300px">
              <KoinXBanner />
            </ScrollableSection>
            <ScrollableSection minWidth="300px">
              <TrendingCoins />
            </ScrollableSection>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-4 sm:mt-6">
        <ScrollableSection>
          <BitcoinStats bitcoinData={bitcoinData} />
        </ScrollableSection>
      </div>
      <div className="mt-4 sm:mt-6">
        <ScrollableSection>
          <Sentiment />
        </ScrollableSection>
      </div>
      <div className="mt-4 sm:mt-6">
        <ScrollableSection>
          <BitcoinInfo />
        </ScrollableSection>
      </div>
      <div className="mt-4 sm:mt-6">
        <ScrollableSection>
          <Tokenomics />
        </ScrollableSection>
      </div>
      <div className="mt-4 sm:mt-6">
        <ScrollableSection>
          <Team />
        </ScrollableSection>
      </div>

      <div className="mt-4 sm:mt-6">
        <ScrollableSection>
          <CryptoCarousel></CryptoCarousel>
        </ScrollableSection>
      </div>

      {/* Mobile-only KoinX Banner and Trending Coins */}
      <div className="lg:hidden mt-4 space-y-4">
        <ScrollableSection minWidth="300px">
          <KoinXBanner />
        </ScrollableSection>
        <ScrollableSection minWidth="300px">
          <TrendingCoins />
        </ScrollableSection>
      </div>
    </div>
  );
};

export default Home;