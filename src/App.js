import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./component/Header/NavBar";
import AdminLogin from "./component/AdminPage/AdminLogin";
import AboutUs from "./component/Contact Us/AboutUs";
import HomePage from "./component/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import MovieLinkData from "./component/MovieData/MovieLinkData";
function App() {
  useEffect(() => {
    document.title = "MoviesDownload";
  });

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/mdata" element={<MovieLinkData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
