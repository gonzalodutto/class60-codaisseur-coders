import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
