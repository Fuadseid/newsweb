import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
