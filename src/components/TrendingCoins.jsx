import React, { useState, useEffect } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3));
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span className="font-medium">{coin.item.name}</span>
            </div>
            <div className={`px-2 py-1 rounded-sm ${
              parseFloat(coin.item.data?.price_change_percentage_24h?.usd || 0) >= 0
                ? 'text-green-600 bg-green-50'
                : 'text-red-600 bg-red-50'
            }`}>
              <span className="flex items-center gap-1">
                {coin.item.data?.price_change_percentage_24h?.usd >= 0 ? '▲' : '▼'}
                {Math.abs(parseFloat(coin.item.data?.price_change_percentage_24h?.usd || 0)).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;