import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Navbar } from "./componentes";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import { persistLogin } from "./store/auth/thunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistLogin());
  }, [dispatch]);

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
