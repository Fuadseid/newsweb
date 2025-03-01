import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Profile from "./Pages/Profile";
import { useState } from "react";

function App() {
  const [fav,setFav] = useState(false);
  function Addfav(){
    setFav(!fav);
    console.log("click")
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home fav={fav} Addfav={Addfav}/>} />
        <Route path="favorite" element={<Favorite fav={fav} Addfav={Addfav}/>} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
