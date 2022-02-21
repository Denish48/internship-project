import React, { useState, useEffect, Suspense } from "react";
import { dt } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";

const HomePage = () => {
  const [data_Show, setData_Show] = useState([]);
  //let variable for collect the data from database:

  const dtds = collection(dt, "AllMovieData");

  //function for get data into database:
  const showdata = async () => {
    const data = await getDocs(dtds);
    console.log(data);
    await setData_Show(data.docs.reverse().map((doc) => ({ ...doc.data() })));
  };
  //when site load first time call the function and show the data:
  useEffect(() => {
    showdata();
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <>
            <h1>loading.....</h1>
            <Spinner />
          </>
        }
      >
        <div className="movie-collection">
          <Container>
            {data_Show.map((cur_ELE, index) => {
              return (
                <div key={index}>
                  <div className="maindiv" >
                    <div className="movie-image">
                      <img src={cur_ELE.image_link} />
                    </div>
                    <div className="main-text">
                      <p style={{ fontWeight: "bold" }}>{cur_ELE.movie_Name}</p>
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
  );
};

export default HomePage;
