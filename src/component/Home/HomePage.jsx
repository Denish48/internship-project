import React, { useState, useEffect, Suspense, useRef } from "react";
import { dt } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
// import Pagination from "@material-ui/lab/Pagination";

const HomePage = ({ change }) => {
  const redirect4 = useNavigate();
  const [data_Show, setData_Show] = useState([]);
  //let variable for collect the data from database:

  const dtds = collection(dt, "AllMovieData");

  //function for get data into database:
  const showdata = async () => {
    const data = await getDocs(dtds);
    console.log(data);
    await setData_Show(data.docs.reverse().map((doc) => ({ ...doc.data() })));
    //clear the browser history:
    window.history.replaceState(null, null, "/");
  };
  //when site load first time call the function and show the data:
  useEffect(() => {
    showdata();
  }, []);

  //set state for get  searchbar value:
  const [search, setSearch] = useState("");
  //set state for conditional rendering:
  const [movie_flag, setMovie_flag] = useState();
  //use useRef for focus on searchbar:
  const get_focus = useRef();
  //search button onclick function:
  const searching = () => {
    if (search === "") {
      get_focus.current.focus();
    } else {
      setMovie_flag(true);
    }
  };
  console.log(search);
  //back button onclick function:
  const search_back = () => {
    setMovie_flag(false);
  };

  const wallpaper_data = () => {
    redirect4("/WallpaperDataShow");
    change("WALLPAPERS");
  };
  return (
    <>
      {!movie_flag && (
        <>
          <Suspense
            fallback={
              <>
                <div>
                  <h1>loading.....</h1>
                  <Spinner />
                </div>
              </>
            }
          >
            <br />
            <button className="btn btn-light" onClick={wallpaper_data}>
              Wallpapers
            </button>
            <br />
            <br />
            <input
              ref={get_focus}
              placeholder="Search Here"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark" onClick={searching}>
              <SearchIcon />
            </button>
            <br />

            <div className="movie-collection">
              <Container>
                {data_Show.map((cur_ELE, index) => {
                  return (
                    <div key={index}>
                      <div className="maindiv">
                        <div className="movie-image">
                          <img src={cur_ELE.image_link} alt="" />
                        </div>
                        <div className="main-text">
                          <p style={{ fontWeight: "bold" }}>
                            {cur_ELE.movie_Name}
                          </p>
                          <a href={cur_ELE.screenshot_link}>Screenshot</a>
                          <a href={cur_ELE.link_480P}>480P</a>
                          <a href={cur_ELE.link_720P}>720P</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Container>
            </div>
          </Suspense>
        </>
      )}
      {movie_flag && (
        <>
          <Suspense
            fallback={
              <>
                <div>
                  <h1>loading.....</h1>
                  <Spinner />
                </div>
              </>
            }
          >
            <br />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark" onClick={searching}>
              <SearchIcon />
            </button>
            <br />
            <br />
            <button className="btn btn-primary" onClick={search_back}>
              <ArrowBackIcon />
              Back
            </button>

            {data_Show
              .filter(
                (item) =>
                  item.movie_Name.toLowerCase().replace(/\s+/g, "") ===
                  search.toLowerCase().replace(/\s+/g, "")
              )
              .map((cur_ELE, index) => {
                return (
                  <div className="movie-collection">
                    <Container>
                      <div key={index}>
                        <div className="maindiv">
                          <div className="movie-image">
                            <img src={cur_ELE.image_link} alt="" />
                          </div>
                          <div className="main-text">
                            <p style={{ fontWeight: "bold" }}>
                              {cur_ELE.movie_Name}
                            </p>
                            <a href={cur_ELE.screenshot_link}>Screenshot</a>
                            <a href={cur_ELE.link_480P}>480P</a>
                            <a href={cur_ELE.link_720P}>720P</a>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                );
              })}
          </Suspense>
        </>
      )}
    </>
  );
};

export default HomePage;
