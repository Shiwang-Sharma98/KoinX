import React, { useState, useEffect } from 'react';
import TradingViewChart from '../components/TradingViewChart';
import TrendingCoins from '../components/TrendingCoins';
import KoinXBanner from '../components/KoinXBanner';

const Home = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-grow">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                alt="Bitcoin"
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold">Bitcoin</h1>
              <span className="text-gray-500 font-medium">BTC</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                Rank #1
              </span>
            </div>

            {bitcoinData && (
              <div className="mb-8">
                <div className="text-3xl font-bold">
                  ${bitcoinData.usd.toLocaleString()}
                </div>
                <div className="text-lg text-gray-700 mt-1">
                  ₹ {bitcoinData.inr.toLocaleString()}
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className={`px-2 py-1 rounded-sm flex items-center gap-1 ${
                    bitcoinData.usd_24h_change >= 0
                      ? 'text-green-600 bg-green-50'
                      : 'text-red-600 bg-red-50'
                  }`}>
                    {bitcoinData.usd_24h_change >= 0 ? '▲' : '▼'}
                    {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}%
                  </div>
                  <span className="text-gray-500">(24H)</span>
                </div>
              </div>
            )}

            <TradingViewChart />
          </div>
        </div>

        <div className="lg:w-80 space-y-6">
          <KoinXBanner />
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default Home;