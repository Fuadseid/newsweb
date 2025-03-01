import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // For animations
import { FaUserCircle } from "react-icons/fa"; // Profile icon

function Navigation() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-between p-6 shadow-lg"
      style={{
        background: "linear-gradient(270deg, #00b4db, #0083b0, #00b4db, #0083b0)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered Links (Home and Favorite) */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-blue-700 px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              : "text-zinc-100 hover:text-white hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-blue-700 px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              : "text-zinc-100 hover:text-white hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          }
        >
          Favorite
        </NavLink>
      </div>

      {/* Profile Link (Rightmost Corner) */}
      <motion.div
        className="mt-4 sm:mt-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-blue-700 p-3 rounded-full shadow-lg transform transition-all duration-300"
              : "text-zinc-100 hover:text-white hover:bg-blue-700 p-3 rounded-full transition-all duration-300"
          }
        >
          <FaUserCircle className="text-2xl" />
        </NavLink>
      </motion.div>

      {/* CSS for Gradient Animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </motion.div>
  );
}

export default Navigation;