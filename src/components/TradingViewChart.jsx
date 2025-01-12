import React, { useEffect } from 'react';

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: 'tradingview-widget',
          symbol: 'BITSTAMP:BTCUSD',
          interval: '1H',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '2', // Change style to "2" for line graph
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_legend: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          height: 400,
          withdateranges: true,
          range: '1D',
          details: true,
          hotlist: true,
          calendar: true,
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded hover:bg-gray-100">1H</button>
          <button className="px-3 py-1 text-sm rounded hover:bg-gray-100">24H</button>
          <button className="px-3 py-1 text-sm rounded hover:bg-gray-100">7D</button>
          <button className="px-3 py-1 text-sm rounded hover:bg-gray-100">ALL</button>
        </div>
      </div>
      <div id="tradingview-widget" className="w-full h-[400px]" />
    </div>
  );
};

export default TradingViewChart;
