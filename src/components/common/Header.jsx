import { motion } from "framer-motion";

const Header = ({ title }) => {
  return (
    <motion.header
      className="bg-gradient-to-r from-blue-200 via-purple-300 to-teal-200 bg-opacity-90 backdrop-blur-md shadow-xl rounded-lg py-8 px-6 lg:col-span-2 border-b border-gray-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Menu */}
        <motion.div
          className="text-lg font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          {/* You can add your logo or a simple icon */}
          <i className="fas fa-cloud-sun text-xl"></i>
        </motion.div>

        {/* Tiêu đề */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Tìm kiếm */}
        <motion.div
          className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        ></motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
