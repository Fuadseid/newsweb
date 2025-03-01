import Navigation from "../Components/Navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion"; // For animations

function Favorite({ favorites, toggleFavorite }) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navigation />
      <div className="p-8 space-y-8 max-w-4xl mx-auto">
        {favorites.length > 0 ? (
          favorites.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                   
                    <button
                      onClick={() => toggleFavorite(article)}
                      className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      <FaStar className="text-orange-500" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="text-center text-gray-500 p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>No favorites added yet.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Favorite;