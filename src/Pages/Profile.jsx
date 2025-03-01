import Navigation from "../Components/Navigation";
import { motion } from "framer-motion"; // For animations

function Profile() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navigation />
      <motion.div
        className="p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                src="fuad.jpg"
                alt="Profile"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-semibold">Edit</span>
              </div>
            </motion.div>

            {/* Profile Details */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-800">Fuad Seid</h1>
              <p className="text-gray-600">+251907242838</p>
              <p className="text-gray-600 mt-2">
                Software Developer | React Enthusiast
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600">
              Passionate about building user-friendly and performant web
              applications. Experienced in React, JavaScript, and modern web
              development tools. Always eager to learn and explore new
              technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Node.js",
                "Git",
                "Firebase",
                "Node js",
                "Flutter"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;