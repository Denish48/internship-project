import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
import AdminLogin from "./component/AdminPage/AdminLogin";
import AboutUs from "./component/Contact Us/AboutUs";
import { Routes, Route } from "react-router-dom";
import Spinner from "./component/Spinner/Spinner";
import MovieLinkData from "./component/MovieData/MovieLinkData";
import AdminAllData from "./component/ShowAdminData/AdminAllData";
import ErrorPage from "./component/ErrorPage/ErrorPage";
// import NavBar from "./component/Header/NavBar";
import WallpaperDataShow from "./component/wallpaper/WallpaperDataShow";
const HomePage = React.lazy(() => import("./component/Home/HomePage")); // Lazy-loaded
const NavBar = React.lazy(() => import("./component/Header/NavBar"));
function App() {
  useEffect(() => {
    document.title = "MoviesDownload";
    // window.history.replaceState(null, null, "/");
  });

  // const [admin_user, setAdmin_user] = useState(false)
  const [nav_Title, setNav_Title] = useState("MOVIES");
  const[logedin,setLogedin]=useState(false)

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
        <NavBar title={nav_Title} before={setNav_Title} />
        <Routes>
        {
        !logedin &&
        (
         <>
          <Route exact path="/" element={<HomePage change={setNav_Title} />} />
          <Route path="/AdminLogin" element={<AdminLogin authenticate={setLogedin}/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WallpaperDataShow" element={<WallpaperDataShow />} />
          </>
          
        )

        }

        {
          logedin && 
          (
            <>
            <Route
            path="/MovieLinkdata"
            element={<MovieLinkData />}
          />
          <Route
            path="/AdminAllData"
            element={<AdminAllData />} />
             <Route exact path="/" element={<HomePage change={setNav_Title} />} />
          <Route path="/AdminLogin" element={<AdminLogin authenticate={setLogedin}/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WallpaperDataShow" element={<WallpaperDataShow />} />
            </>
          )
        }
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        
      </Suspense>
    </div>
    
  );
}

export default App;
