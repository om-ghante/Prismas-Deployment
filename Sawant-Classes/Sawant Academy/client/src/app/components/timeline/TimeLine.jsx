import React from "react";
import { timelineData } from "../../content/data";

const Timeline = () => {
  return (
    <section className="w-full px-4 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Course And Study Program</h2>
      </div>

      {/* Desktop View: Horizontal */}
      <div className="hidden md:flex justify-between items-start max-w-6xl mx-auto relative">
        <div className="absolute top-8 left-0 right-0 h-1 bg-blue-300 z-0" />
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center flex-1 text-center px-2 relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <Icon className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2 max-w-[180px]">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet View: Vertical */}
      <div className="md:hidden flex flex-col gap-10 items-center max-w-md mx-auto">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center px-4 relative">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Icon className="text-white text-xl" />
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              {index !== timelineData.length - 1 && (
                <div className="w-px h-10 bg-blue-300 mt-4" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
