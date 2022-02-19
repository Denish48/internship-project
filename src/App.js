import "./App.css";
import React, { useEffect, Suspense } from "react";
import AdminLogin from "./component/AdminPage/AdminLogin";
import AboutUs from "./component/Contact Us/AboutUs";
import { Routes, Route } from "react-router-dom";
import Spinner from "./component/Spinner/Spinner";
// import NavBar from "./component/Header/NavBar";
const HomePage = React.lazy(() => import("./component/Home/HomePage")); // Lazy-loaded
const NavBar = React.lazy(() => import("./component/Header/NavBar"));

function App() {
  useEffect(() => {
    document.title = "MoviesDownload";
  });

  return (
    <>
      <Suspense
        fallback={
          <>
            <Spinner />
          </>
        }
      >
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
