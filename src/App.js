import "./App.css";
import React, { useEffect, Suspense } from "react";
import AdminLogin from "./component/AdminPage/AdminLogin";
import AboutUs from "./component/Contact Us/AboutUs";
import { Routes, Route ,AuthenticatedRoute } from "react-router-dom";
import Spinner from "./component/Spinner/Spinner";
import MovieLinkData from "./component/MovieData/MovieLinkData";
import AdminAllData from "./component/ShowAdminData/AdminAllData";
import ErrorPage from "./component/ErrorPage/ErrorPage";
// import NavBar from "./component/Header/NavBar";
const HomePage = React.lazy(() => import("./component/Home/HomePage")); // Lazy-loaded
const NavBar = React.lazy(() => import("./component/Header/NavBar"));
function App() {
  useEffect(() => {
    document.title = "MoviesDownload";
    window.history.replaceState(null, null, "/");

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
          <Route exact path="/MovieLinkdata/jfhui/wehfrg54th6/55trg53/f1gtr65/h4r6541bh6/4h45t54/th54/54g/575rg" element={<MovieLinkData />} />
          <Route exact path="/AdminAllData/fhegfy/wegyuwegbd/ewfr54r84/reg4r4w5/ref4r5e4g/ref4erw5/qw54" element={<AdminAllData />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
