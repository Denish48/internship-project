import React, { useState } from "react";
//import database from firebase file:
import { dt } from "../FireBase";
import { addDoc, collection } from "firebase/firestore";

const MovieLinkData = () => {
  //state for getinput data from form:
  const [screen_Link, setScreen_Link] = useState("");
  const [down480P_Link, setDown480P_Link] = useState("");
  const [down720P_Link, setDown720P_Link] = useState("");
  const [img_Link, setimg_Link] = useState("");
  const [movie_Name, setMovie_Name] = useState("");
  const [uni_ID, setUni_ID] = useState(new Date().toLocaleDateString());
  //variable create for database collection:
  const dtds = collection(dt, "AllMovieData");

  //function for store data into firebase database:
  const addMovieLinks = async () => {
    if (screen_Link.trim().length > 0) {
      await addDoc(dtds, {
        //first of the input name attribute value and after state value:
        screenshot_link: screen_Link,
        link_480P: down480P_Link,
        link_720P: down720P_Link,
        image_link: img_Link,
        uni_ID: uni_ID,
        movie_Name: movie_Name,
      });
    }
  };

  //onChange event function for input value:

  const All_Data_Handler = (e) => {
    e.preventDefault();
    //for set the data on given setstate:
    setScreen_Link(screen_Link);
    setDown480P_Link(down480P_Link);
    setDown720P_Link(down720P_Link);
    setimg_Link(img_Link);
    setMovie_Name(movie_Name);
    setUni_ID(new Date().toLocaleDateString());

    //console data :
    // console.log(screen_Link);
    // console.log(down480P_Link);
    // console.log(down720P_Link);
    // console.log(img_Link);
    //function call for data store into firebase database after that form will be clear:
    if (addMovieLinks()) {
      setScreen_Link("");
      setDown480P_Link("");
      setDown720P_Link("");
      setimg_Link("");
    }
  };

  return (
    <>
      {/* button for add new admin user */}
      <div>
        <button>Add New Admin</button>
      </div>
      <br />
      <br />
      <h2>Enter Movie Data</h2>
      <form onSubmit={All_Data_Handler}>
        <input type="text" value={uni_ID} hidden name="uni_ID" />
        <div className="img_file_input">
          <label>Enter Movie Name:</label>
          <br />
          <br />
          <input
            type="text"
            name="movie_Name"
            id="movie_Name"
            value={movie_Name}
            onChange={(e) => setMovie_Name(e.target.value)}
            required
            autoComplete="off"
          />
          <br />
          <br />
          <label htmlFor="">Enter Img Link:</label>
          <br />
          <input
            type="text"
            value={img_Link}
            onChange={(e) => setimg_Link(e.target.value)}
            name="image_link"
            id="img_link"
            required
            autoComplete="off"
          />
          <br />
          <br />
        </div>
        <label htmlFor="">Enter Screenshots Link:</label>
        <br />
        <input
          type="text"
          value={screen_Link}
          onChange={(e) => setScreen_Link(e.target.value)}
          name="screenshot_link"
          id="screenshot_link"
          required
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="">Enter 480p Download Link:</label>
        <br />
        <input
          type="text"
          value={down480P_Link}
          onChange={(e) => setDown480P_Link(e.target.value)}
          name="link_480P"
          id="link_480P"
          required
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="">Enter 720p Download Link:</label>
        <br />
        <input
          type="text"
          value={down720P_Link}
          onChange={(e) => setDown720P_Link(e.target.value)}
          name="link_720P"
          id="link_720P"
          required
          autoComplete="off"
        />
        <br />
        <br />

        <div>
          <button type="submit">Upload</button>
        </div>
      </form>

      <div>
        <h2>Here create table for movie name list and shoew the delete and update button </h2>
      </div>
    </>
  );
};

export default MovieLinkData;
