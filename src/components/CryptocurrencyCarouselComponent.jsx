import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CryptoCarousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins || []);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  const scroll = (elementId, direction) => {
    const container = document.getElementById(elementId);
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatPrice = (price) => {
    if (!price) return '$0.00';
    
    // If price is already a formatted string with $
    if (typeof price === 'string' && price.includes('$')) {
      return price;
    }

    // If price is a number or can be converted to one
    const numericPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.-]+/g, '')) : parseFloat(price);
    
    if (isNaN(numericPrice)) return '$0.00';
    
    return `$${numericPrice.toFixed(2)}`;
  };

  const CarouselSection = ({ title, id }) => (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="relative">
        <button 
          onClick={() => scroll(id, 'left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        
        <div 
          id={id}
          className="flex overflow-x-auto hide-scrollbar gap-4 relative px-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {loading ? (
            <div className="flex items-center justify-center w-full p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            trendingCoins.map(({ item }, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="min-w-[200px] bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <img 
                    src={item.thumb} 
                    alt={item.name} 
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-sm">{item.symbol}</span>
                  <span className={`ml-auto text-xs ${
                    (item.data?.price_change_percentage_24h?.usd || 0) > 0 
                      ? 'text-green-500' 
                      : 'text-red-500'
                  }`}>
                    {(item.data?.price_change_percentage_24h?.usd || 0).toFixed(2)}%
                  </span>
                </div>
                <div className="text-base font-bold mt-1">
                  {formatPrice(item.data?.price)}
                </div>
                {item.data?.sparkline && (
                  <img 
                    src={item.data.sparkline} 
                    alt="Price graph" 
                    className="w-full h-12 mt-2"
                  />
                )}
              </div>
            ))
          )}
        </div>
        
        <button 
          onClick={() => scroll(id, 'right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <CarouselSection title="You May Also Like" id="like-carousel" />
      <CarouselSection title="Trending Coins" id="trending-carousel" />
      
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CryptoCarousel;