import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import { Sun, Cloud, Wind, CloudRain } from "lucide-react";
import CityToLatLon from "../components/overview/API";
import { motion } from "framer-motion"; // Import Framer Motion

const OverviewPage = () => {
  // State để lưu trữ dữ liệu thời tiết
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // Hàm này nhận dữ liệu từ component con và lưu vào state
  const handleCityData = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };

  // Hàm để gọi API OpenWeatherMap
  const fetchWeather = async () => {
    if (!lat || !lon) return; // Kiểm tra nếu lat và lon chưa có giá trị thì không gọi API

    const apiKey = "5e8c510e7c4f2169d861e0128a2b40d4"; // Thay bằng API key của bạn
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
      }
      const data = await response.json();
      const temperature = data.main.temp - 273.15; // Chuyển đổi từ Kelvin sang Celsius
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const rain = data.rain ? data.rain["1h"] : 0; // Lượng mưa trong 1h

      // Lưu trữ dữ liệu vào state
      setWeatherData({ temperature, humidity, windSpeed, rain });
    } catch (err) {
      setError(err.message);
    }
  };

  // Gọi API khi lat và lon thay đổi
  useEffect(() => {
    if (lat && lon) {
      fetchWeather();
    }
  }, [lat, lon]); // Chạy lại khi lat hoặc lon thay đổi

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Thời Tiết " />
      <div className="mt-8">
        {/* Truyền handleCityData vào prop */}
        <CityToLatLon onCityData={handleCityData} />
      </div>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          {/* Nhiệt độ Card */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 50 }} // Khởi tạo opacity là 0 và y là 50px (vị trí dưới)
            animate={{ opacity: 1, y: 0 }} // Khi animate, opacity là 1 và y = 0 (di chuyển lên)
            transition={{ duration: 0.5, delay: 0.2 }} // Thời gian và độ trễ của hiệu ứng
          >
            <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-orange-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="icon bg-orange-200 p-3 rounded-full">
                <Sun size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Nhiệt Độ</h3>
                <div className="text-2xl font-bold text-white">
                  <span>{`${weatherData?.temperature?.toFixed(2)}`}</span>
                  <span className="text-lg font-normal ml-1">°C</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Độ ẩm Card */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="icon bg-purple-200 p-3 rounded-full">
                <Cloud size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Độ Ẩm</h3>
                <div className="text-2xl font-bold text-white">
                  <span>{`${weatherData?.humidity}`}</span>
                  <span className="text-lg font-normal ml-1">%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tốc độ Gió Card */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center space-x-4 bg-gradient-to-r from-teal-500 to-teal-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="icon bg-teal-200 p-3 rounded-full">
                <Wind size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Tốc Độ Gió</h3>
                <div className="text-2xl font-bold text-white">
                  <span>{`${weatherData?.windSpeed}`}</span>
                  <span className="text-lg font-normal ml-1">m/s</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lượng Mưa Card */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center space-x-4 bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="icon bg-green-200 p-3 rounded-full">
                <CloudRain size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Lượng Mưa</h3>
                <div className="text-2xl font-bold text-white">
                  <span>{`${weatherData?.rain || 0}`}</span>
                  <span className="text-lg font-normal ml-1">mm</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
