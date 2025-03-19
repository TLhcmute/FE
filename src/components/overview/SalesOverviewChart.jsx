import React from "react";
import { WiHumidity, WiRaindrop, WiWindy } from "react-icons/wi";

const SalesOverviewChart = ({
  temperature,
  humidity,
  windSpeed,
  rainChance,
}) => {
  return (
    <div className="max-w-sm w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-100">
          Thời Tiết Hiện Tại
        </h2>
        <div className="flex justify-center items-center mb-4">
          <span className="text-6xl font-semibold text-gray-100">
            {temperature}°C
          </span>
        </div>
        <div className="text-center text-lg mb-4 text-gray-300">
          Độ ẩm: {humidity}%
        </div>
        <div className="flex justify-around mb-4">
          <div className="flex items-center">
            <WiHumidity className="text-cyan-400 mr-2" size={24} />
            <span className="text-gray-300">{humidity}%</span>
          </div>
          <div className="flex items-center">
            <WiWindy className="text-emerald-400 mr-2" size={24} />
            <span className="text-gray-300">{windSpeed} km/h</span>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex items-center">
            <WiRaindrop className="text-sky-400 mr-2" size={24} />
            <span className="text-gray-300">{rainChance}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
