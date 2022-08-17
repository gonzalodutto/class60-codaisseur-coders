import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}
