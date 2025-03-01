import Navigation from "../Components/Navigation";
import { motion } from "framer-motion"; // For animations
import Footer from "../Components/Footer";
function Profile() {
  return (
   <> <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navigation />
      <motion.div
        className="p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
                src="fuad.jpg"
                alt="Profile"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-semibold">Edit</span>
              </div>
            </motion.div>

            {/* Profile Details */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Fuad Seid</h1>
              <p className="text-gray-600 mt-2">+251907242838</p>
              <p className="text-gray-600">fuaddbus@gmail.com</p>
              <p className="text-gray-600 mt-2">
                Software Developer | React Enthusiast
              </p>
            </div>
          </div>

          {/* About Me Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Passionate about building user-friendly and performant web
              applications. Experienced in React, JavaScript, Flutter, and modern
              web development tools. Always eager to learn and explore new
              technologies to deliver high-quality solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Node.js",
                "Git",
                "Firebase",
                "Flutter",
                "REST APIs",
                "Figma",
                "MongoDB",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-blue-50 text-blue-800 rounded-lg text-center text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
<Footer/>
    </>
  );
}

export default Profile;