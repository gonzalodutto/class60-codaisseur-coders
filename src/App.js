import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Navbar } from "./componentes";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
