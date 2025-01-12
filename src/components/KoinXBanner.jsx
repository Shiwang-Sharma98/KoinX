import React from 'react';

const KoinXBanner = () => {
  return (
    <div className="bg-blue-600 rounded-lg p-8 text-white mb-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Get Started with KoinX
        <br />
        for FREE
      </h2>
      <p className="text-center mb-8 text-sm">
        With our range of features that you can equip for
        free, KoinX allows you to be more educated and
        aware of your tax reports.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLowerSection.7ba5b083.png&w=384&q=75"
          alt="KoinX Features"
          className="w-60"
        />
      </div>
      <button className="bg-white text-black px-6 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 flex items-center justify-center gap-2">
        Get Started for FREE
        <span>→</span>
      </button>
    </div>
  );
};

export default KoinXBanner;