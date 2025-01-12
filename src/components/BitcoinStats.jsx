import React from 'react';

const BitcoinStats = ({ bitcoinData }) => {
  if (!bitcoinData) return null;

  // Format currency with commas
  const formatCurrency = (value, isCurrency = true) => {
    if (typeof value !== 'number') return value;
    const formatted = value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return isCurrency ? `$${formatted}` : formatted;
  };

  // Format percentage
  const formatPercentage = (value) => {
    if (typeof value !== 'number') return value;
    return `${value.toFixed(2)}%`;
  };

  // Calculate USD values from provided data
  const currentPrice = bitcoinData.usd || 16815.46;
  const priceChange24h = bitcoinData.usd_24h_change || 0;

  // Using static data for missing values
  const staticData = {
    todayLow: currentPrice * 0.97, // Estimated as 97% of current price
    todayHigh: currentPrice * 1.03, // Estimated as 103% of current price
    weekLow: 16382.07,
    weekHigh: 16874.12,
    yearLow: 16930.22,
    yearHigh: 49743.83,
    tradingVolume: 23249202782,
    marketCapRank: 1,
    marketCap: 323507290047,
    marketCapDominance: 38.343,
    volumeMarketCap: 0.0718,
    allTimeHigh: {
      price: 69044.77,
      change: -75.6,
      date: 'Nov 10, 2021'
    },
    allTimeLow: {
      price: 67.81,
      change: 24729.1,
      date: 'Jul 06, 2013'
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {/* Performance Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        
        {/* Today's Range */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600 mb-1">Today's Low</p>
              <p className="font-medium">{formatCurrency(staticData.todayLow)}</p>
            </div>
            <div className="flex-grow mx-4 self-center">
              <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
              <div className="relative">
                <div className="absolute right-1/2 transform translate-x-1/2 mt-1">
                  <p className="text-gray-600">{formatCurrency(currentPrice)}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Today's High</p>
              <p className="font-medium">{formatCurrency(staticData.todayHigh)}</p>
            </div>
          </div>
        </div>

        {/* 52W Range */}
        <div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">52W Low</p>
              <p className="font-medium">{formatCurrency(staticData.yearLow)}</p>
            </div>
            <div className="flex-grow mx-4 self-center">
              <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">52W High</p>
              <p className="font-medium">{formatCurrency(staticData.yearHigh)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-semibold">Fundamentals</h2>
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">ⓘ</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Bitcoin Price</span>
              <span className="font-medium">{formatCurrency(currentPrice)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">24h Low / 24h High</span>
              <span className="font-medium">
                {formatCurrency(staticData.todayLow)} / {formatCurrency(staticData.todayHigh)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">7d Low / 7d High</span>
              <span className="font-medium">
                {formatCurrency(staticData.weekLow)} / {formatCurrency(staticData.weekHigh)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Trading Volume</span>
              <span className="font-medium">{formatCurrency(staticData.tradingVolume)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Market Cap Rank</span>
              <div className="text-right">
                <span className="font-medium">#{staticData.marketCapRank}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Market Cap</span>
              <span className="font-medium">{formatCurrency(staticData.marketCap)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Market Cap Dominance</span>
              <span className="font-medium">{formatPercentage(staticData.marketCapDominance)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Volume / Market Cap</span>
              <span className="font-medium">{staticData.volumeMarketCap}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">All-Time High</span>
              <div className="text-right">
                <div className="font-medium flex items-center justify-end">
                  {formatCurrency(staticData.allTimeHigh.price)}
                  <span className="text-red-500 ml-2">{formatPercentage(staticData.allTimeHigh.change)}</span>
                </div>
                <div className="text-sm text-gray-500">{staticData.allTimeHigh.date} (about 1 year)</div>
              </div>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">All-Time Low</span>
              <div className="text-right">
                <div className="font-medium flex items-center justify-end">
                  {formatCurrency(staticData.allTimeLow.price)}
                  <span className="text-green-500 ml-2">{formatPercentage(staticData.allTimeLow.change)}</span>
                </div>
                <div className="text-sm text-gray-500">{staticData.allTimeLow.date} (over 9 years)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinStats;