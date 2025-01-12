import React from 'react';
import { Info } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SentimentAnalysis = () => {
    const sliderSettings = {
        dots: true,
        infinite: true, // Enable seamless looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 2000, // Time between slides in milliseconds
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      

  const events = [
    {
      type: 'news',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur et veritatis at impedit eaque ut non nostrum maxime nobis modi, repellat molestiae aliquam porro inventore. Necessitatibus repellendus adipisci maxime, veritatis praesentium eum ratione aliquid explicabo repellat commodi unde voluptatum neque asperiores laborum voluptate? Iusto eos voluptatem illum alias tempore consequatur iure amet quia ab dignissimos. Inventore laboriosam magni rem ab possimus delectus quia totam nam dignissimos! Repellendus perferendis doloremque nobis. Voluptatem in deserunt ipsum et asperiores magni? Quaerat facere repellendus veniam? Quibusdam enim consectetur incidunt quas? Alias accusantium, error tempora tenetur cupiditate qui officiis voluptatem voluptates nemo nihil rerum totam."
    },
    {
      type: 'growth',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore minima adipisci quas dolores officia a maxime in assumenda illo eum voluptate dignissimos, odio ad expedita similique dolor nisi officiis laboriosam quidem, hic, aliquam at ab maiores. A distinctio est expedita reprehenderit nisi iusto debitis magni laborum explicabo suscipit eligendi, rerum tempore quia laudantium accusantium placeat fugit nulla doloribus repellat provident sunt aspernatur labore maiores? Magnam eaque nostrum hic, dolore commodi inventore incidunt porro vitae dolorum tenetur eos doloribus veniam illo atque assumenda distinctio, saepe laudantium vel quas quaerat quia autem soluta obcaecati iste! Doloremque nostrum autem assumenda nam maxime."
    },
    {
      type: 'news',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
      title: 'Another Lorem ipsum dolor sit.',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero eos, nisi consequuntur veritatis error perspiciatis maxime consectetur ipsum ipsa eligendi nobis atque accusantium ad, cupiditate quia culpa magni, soluta ullam possimus consequatur unde odio? Officia doloribus quidem, repellat, laboriosam provident expedita sapiente sint nesciunt aut, fugit tenetur deserunt ea voluptate! Modi, exercitationem eveniet. Voluptas soluta possimus porro incidunt suscipit velit fugit. Vitae alias officia quidem cupiditate neque pariatur nam! Nihil aperiam eius ratione iure ut, nam praesentium fuga, quod soluta quisquam quidem deserunt velit voluptatum. Voluptates, tenetur. Quod quae, dicta sed ad iusto possimus minima aut quis ipsa dignissimos."
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm space-y-8">
      {/* Sentiment Section */}
      <div className=" h-50">
        <div className="flex items-center gap-2 mb-4 ">
          <h2 className="text-xl font-semibold">Sentiment</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        {/* Key Events Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-semibold text-gray-600">Key Events</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <Slider {...sliderSettings} className="mb-8 -mx-2">
            {events.map((event, index) => (
              <div key={index} className="px-2">
                <div className={`${event.bgColor} p-4 rounded-lg h-full`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`${event.iconBg} p-2 rounded-lg`}>
                      {event.icon}
                    </div>
                    <span className="font-medium">{event.title}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {event.content}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Analyst Estimates Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-semibold text-gray-600">Analyst Estimates</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-500">76<span className="text-xl">%</span></span>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-600">Buy</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '76%' }} />
                </div>
                <span className="w-12 text-sm text-gray-600">76%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-600">Hold</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-gray-300 rounded-full" style={{ width: '8%' }} />
                </div>
                <span className="w-12 text-sm text-gray-600">8%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-600">Sell</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '16%' }} />
                </div>
                <span className="w-12 text-sm text-gray-600">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;