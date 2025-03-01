import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Profile from "./Pages/Profile";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]); // State to store favorite posts

  // Function to add/remove a post from favorites
  const toggleFavorite = (post) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.title === post.title);
      if (isAlreadyFavorite) {
        // Remove the post from favorites
        return prevFavorites.filter((fav) => fav.title !== post.title);
      } else {
        // Add the post to favorites
        return [...prevFavorites, post];
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="favorite"
          element={
            <Favorite
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;