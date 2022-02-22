import "./App.css";
import React, { useEffect, Suspense } from "react";
import AdminLogin from "./component/AdminPage/AdminLogin";
import AboutUs from "./component/Contact Us/AboutUs";
import { Routes, Route } from "react-router-dom";
import Spinner from "./component/Spinner/Spinner";
import MovieLinkData from "./component/MovieData/MovieLinkData";
import AdminAllData from "./component/ShowAdminData/AdminAllData";
// import NavBar from "./component/Header/NavBar";
const HomePage = React.lazy(() => import("./component/Home/HomePage")); // Lazy-loaded
const NavBar = React.lazy(() => import("./component/Header/NavBar"));

function App() {
  useEffect(() => {
    document.title = "MoviesDownload";
  });

  return (
    <div className="App">
      <Suspense
        fallback={
          <>
            <h1>Loading....</h1>
            <Spinner />
          </>
        }
      >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/MovieLinkData" element={<MovieLinkData />} />
          <Route path="/AdminAllData" element={<AdminAllData />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
