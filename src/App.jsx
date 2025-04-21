import React from "react";
import Home from "./Home";
import Cart from "./Components/Cart";
import bg_wallpaper from "./assets/bg_wallpaper.jpg";
import { Routes, Route } from "react-router-dom";

const App = () => {
  React.useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);
  

  return (
    <div className="relative">
      <img
        src={bg_wallpaper}
        alt="background-wallpaper"
        className="absolute top-0 left-0 w-full h-[100vh] object-cover z-0"
      /> 
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
