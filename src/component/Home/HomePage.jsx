import React, { useState, useEffect } from "react";
import { dt } from "../FireBase";
import { collection, getDocs } from 'firebase/firestore'


const HomePage = () => {

  const [data_Show, setData_Show] = useState([])
  //let variable for collect the data from database:

  const dtds = collection(dt, "AllMovieData")

  //function for get data into database:
  const showdata = async () => {
    const data = await getDocs(dtds)
    console.log(data);
    await setData_Show(data.docs.map((doc) => ({ ...doc.data() })))
  }
  //when site load first time call the function and show the data:
  useEffect(() => {
    showdata();
  }, []);



  return (
    <>
      {
        data_Show.map((cur_ELE) => {
          return (
            <>
              <div className="main_div">
                <div className="image_set_div">
                  <img src={cur_ELE.image_link} alt="" />
                </div>
                <div className="download_link_div">
                  <a href={cur_ELE.link_480P}>480P</a>
                  <br />
                  <a href={cur_ELE.link_720P}>720P</a>
                </div>
              </div>
            </>
          )
        })
      }

    </>
  );
};

export default HomePage;
