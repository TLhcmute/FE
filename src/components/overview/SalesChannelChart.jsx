import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
  { Nhiệt_Độ: 22 },
  { Nhiệt_Độ: 20 },
  { Nhiệt_Độ: 18 },
  { Nhiệt_Độ: 16 },
  { Nhiệt_Độ: 14 },
  { Nhiệt_Độ: 12 },
  { Nhiệt_Độ: 10 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-80 backdrop-blur-xl shadow-xl rounded-xl p-10 lg:col-span-2 border border-gray-700 transition-all transform hover:scale-110 hover:shadow-3xl hover:rotate-3d hover:translate-z-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
    >
      {/* Tiêu đề với gradient và hiệu ứng động */}
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Nhiệt độ 7 ngày tiếp theo
      </motion.h2>

      {/* Biểu đồ với các hiệu ứng hover cho từng item */}
      <div className="h-96 transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-800 rounded-lg p-4">
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.9)",
                borderColor: "#4B5563",
                borderRadius: "12px",
                borderWidth: "2px",
              }}
              itemStyle={{ color: "#E5E7EB" }}
              wrapperStyle={{ borderRadius: "12px" }}
            />
            <Legend wrapperStyle={{ paddingTop: "10px" }} />
            <Bar dataKey="Nhiệt_Độ" fill="#8884d8" radius={[8, 8, 0, 0]}>
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                  onMouseEnter={() => console.log("Hovered bar!")}
                  onMouseLeave={() => console.log("Mouse left bar!")}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesChannelChart;
