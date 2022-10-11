import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AddPage from "./components/pages/AddPage";
import EditPage from "./components/pages/EditPage";
import HomePage from "./components/pages/HomePage";
import VideoPage from "./components/pages/VideoPage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/videos/add" element={<AddPage />} />
        <Route path="/videos/edit/:videoId" element={<EditPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
