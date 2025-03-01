import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import Footer from "../Components/Footer";

const BASE_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=803d1b2396aa484bb29fcc3c6701821c";
const LIKE_URL = "https://67c2cae71851890165ad44b0.mockapi.io/likes";
const COMMENT_URL = "https://67c2cae71851890165ad44b0.mockapi.io/comments";

function Home({ favorites, toggleFavorite }) {
  const [likes, setLikes] = useState({}); // { articleId: { likedBy: [], likes: number } }
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [showCommentInput, setShowCommentInput] = useState({});
  const [showComments, setShowComments] = useState({});
  const [news, setNews] = useState([]);
  const currentUserId = "user1"; // Replace with the actual logged-in user ID

  // Fetch likes for all articles from MockAPI.io
  const fetchLikes = async () => {
    try {
      const response = await fetch(LIKE_URL);
      const data = await response.json();
      const likesData = data.reduce((acc, like) => {
        acc[like.articleId] = like;
        return acc;
      }, {});
      setLikes(likesData);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  // Fetch comments for all articles from MockAPI.io
  const fetchComments = async () => {
    try {
      const response = await fetch(COMMENT_URL);
      const data = await response.json();
      const commentsData = data.reduce((acc, comment) => {
        if (!acc[comment.articleId]) {
          acc[comment.articleId] = [];
        }
        acc[comment.articleId].push(comment.comment);
        return acc;
      }, {});
      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Fetch news data from API
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  // Fetch likes and comments on component mount
  useEffect(() => {
    fetchLikes();
    fetchComments();
  }, []);

  // Handle Like/Unlike per article
  const handleLike = async (articleTitle) => {
    const articleLikes = likes[articleTitle] || { likedBy: [], likes: 0 };
    const isLiked = articleLikes.likedBy.includes(currentUserId);

    let updatedLikes;
    if (isLiked) {
      // Unlike: Remove the user from the likedBy array
      updatedLikes = {
        ...articleLikes,
        likedBy: articleLikes.likedBy.filter((id) => id !== currentUserId),
        likes: articleLikes.likes - 1,
      };
    } else {
      // Like: Add the user to the likedBy array
      updatedLikes = {
        ...articleLikes,
        likedBy: [...articleLikes.likedBy, currentUserId],
        likes: articleLikes.likes + 1,
      };
    }

    // Update local state
    setLikes((prevLikes) => ({
      ...prevLikes,
      [articleTitle]: updatedLikes,
    }));

    // Update likes on MockAPI.io
    try {
      const response = await fetch(
        `${LIKE_URL}/${articleLikes.id || ""}`,
        {
          method: articleLikes.id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            articleId: articleTitle,
            likedBy: updatedLikes.likedBy,
            likes: updatedLikes.likes,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update likes");
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  // Handle Comment Submission
  const handleCommentSubmit = async (articleTitle) => {
    if (commentText.trim() !== "") {
      const newComments = [...(comments[articleTitle] || []), commentText];
      setComments((prev) => ({
        ...prev,
        [articleTitle]: newComments,
      }));
      setCommentText(""); // Clear the input field after submission
      setShowCommentInput((prev) => ({ ...prev, [articleTitle]: false })); // Hide the input field

      // Add comment to MockAPI.io
      try {
        const response = await fetch(COMMENT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            articleId: articleTitle,
            comment: commentText,
            timestamp: new Date().toISOString(),
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to add comment");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  // Toggle comment input field
  const toggleCommentInput = (articleTitle) => {
    setShowCommentInput((prev) => ({
      ...prev,
      [articleTitle]: !prev[articleTitle],
    }));
    setActiveArticle(articleTitle);
  };

  // Toggle comment visibility
  const toggleCommentVisibility = (articleTitle) => {
    setShowComments((prev) => ({
      ...prev,
      [articleTitle]: !prev[articleTitle],
    }));
  };

  // Handle comment text input
  const handleWriteComment = (e) => {
    setCommentText(e.target.value); // Update the comment text state
  };

  // Detect Enter key press
  useEffect(() => {
    const handleEnter = (event) => {
      if (
        event.key === "Enter" &&
        activeArticle &&
        showCommentInput[activeArticle]
      ) {
        handleCommentSubmit(activeArticle); // Submit the comment
      }
    };

    document.addEventListener("keydown", handleEnter);
    return () => document.removeEventListener("keydown", handleEnter);
  }, [commentText, showCommentInput, activeArticle]);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <Navigation />
        <div className="p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => {
              const articleLikes = likes[article.title] || { likedBy: [], likes: 0 };
              const isLiked = articleLikes.likedBy.includes(currentUserId);

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        {/* Like Button */}
                        <button
                          onClick={() => handleLike(article.title)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
                        >
                          {isLiked ? (
                            <AiFillLike className="text-blue-500 text-2xl" />
                          ) : (
                            <AiOutlineLike className="text-2xl" />
                          )}
                          <span>{articleLikes.likes || 0}</span>
                        </button>

                        {/* Comment Button */}
                        <button
                          onClick={() => toggleCommentInput(article.title)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors"
                        >
                          <span className="text-2xl">💬</span>
                          <span>{comments[article.title]?.length || 0}</span>
                        </button>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(article)}
                          className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          {favorites.some((fav) => fav.title === article.title) ? (
                            <FaStar className="text-orange-500" />
                          ) : (
                            <CiStar />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Comment Input Section */}
                    <AnimatePresence>
                      {showCommentInput[article.title] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4"
                        >
                          <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your comment..."
                            value={commentText}
                            onChange={handleWriteComment}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault(); // Prevent default behavior (e.g., new line)
                                handleCommentSubmit(article.title);
                              }
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle Comments Button & Display */}
                    <button
                      onClick={() => toggleCommentVisibility(article.title)}
                      className="mt-4 text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      {showComments[article.title]
                        ? "Hide Comments"
                        : "Show Comments"}
                    </button>

                    <AnimatePresence>
                      {showComments[article.title] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-2"
                        >
                          {comments[article.title]?.length > 0 ? (
                            comments[article.title].map((comment, index) => (
                              <div
                                key={index}
                                className="p-2 bg-gray-100 rounded-lg text-gray-700"
                              >
                                {comment}
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500">No comments yet.</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;