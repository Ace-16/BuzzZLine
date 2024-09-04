import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import SavedArticles from "./components/SavedArticles";

const App = () => {
  return (
    <div className="h-screen ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/savedArtclies" element={<SavedArticles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
