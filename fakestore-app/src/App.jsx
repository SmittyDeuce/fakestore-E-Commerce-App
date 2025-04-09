import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;
