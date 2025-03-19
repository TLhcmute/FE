import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const CityToLatLon = ({ onCityData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const apiKey = "5e8c510e7c4f2169d861e0128a2b40d4"; // Thay bằng API key của bạn

  const handleSearch = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Nhập vô đi thằng Lồn");
      }
      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Không tìm thấy thành phố này");
      }

      // Gọi hàm onCityData từ component cha và truyền lat, lon lên
      onCityData(data[0].lat, data[0].lon);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.div
      className="max-w-xl mx-auto p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-3xl shadow-xl border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Hiệu ứng fade-in cho toàn bộ component
    >
      {/* Tiêu đề */}
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8 text-center"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        Nhập tên thành phố
      </motion.h1>

      {/* Form tìm kiếm */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Fade-in cho form
      >
        <motion.input
          type="text"
          placeholder="Nhập tên thành phố"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-6 py-3 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          whileFocus={{ scale: 1.05 }} // Hiệu ứng zoom khi focus vào input
        />
        <motion.button
          onClick={handleSearch}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:bg-gradient-to-l"
          whileTap={{ scale: 0.95 }} // Hiệu ứng nhỏ lại khi nhấn vào nút
        >
          Tìm kiếm
        </motion.button>
      </motion.div>

      {/* Thông báo lỗi */}
      {error && (
        <motion.p
          className="mt-6 text-red-500 text-center bg-red-500 bg-opacity-10 rounded-lg p-4 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }} // Fade-in thông báo lỗi
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default CityToLatLon;
