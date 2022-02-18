import React, { useState } from "react";
//import database from firebase file:
import { dt } from "../FireBase";
import { addDoc, collection } from 'firebase/firestore'


const MovieLinkData = () => {

  //state for getinput data from form:
  const [screen_Link, setScreen_Link] = useState("")
  const [down480P_Link, setDown480P_Link] = useState("")
  const [down720P_Link, setDown720P_Link] = useState("")
  const [img_Link, setimg_Link] = useState("")
  //variable create for database collection:
  const dtds = collection(dt, "AllMovieData")

  //function for store data into firebase database:
  const addMovieLinks = async () => {
    if (screen_Link.trim().length > 0) {

      await addDoc(dtds, { screenshot_link: screen_Link, link_480P: down480P_Link, link_720P: down720P_Link, image_link: img_Link })
    }
  }


  //onChange event function for input value:

  const All_Data_Handler = (e) => {
    e.preventDefault()
    //for set the data on given setstate:
    setScreen_Link(screen_Link)
    setDown480P_Link(down480P_Link)
    setDown720P_Link(down720P_Link)
    setimg_Link(img_Link)
    //console data :
    // console.log(screen_Link);
    // console.log(down480P_Link);
    // console.log(down720P_Link);
    // console.log(img_Link);
    //function call for data store into firebase database after that form will be clear:
    if (addMovieLinks()) {
      setScreen_Link("")
      setDown480P_Link("")
      setDown720P_Link("")
      setimg_Link("")
    }
  }





  return (
    <>
      {/* button for add new admin user */}
      <div>
        <button>Add New Admin</button>
      </div>
      <h1>Enter Movie Data</h1>
      <form onSubmit={All_Data_Handler} >
        <label htmlFor="">Enter Screenshots Link:</label>
        <br />
        <input
          type="text"
          value={screen_Link}
          onChange={(e) => setScreen_Link(e.target.value)}
          name="screenshot_link"
          id="screenshot_link"
          required
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
        />
        <br />
        <br />
        <div className="img_file_input">
          <label htmlFor="">Enter Img Link:</label>
          <br />
          <input
            type="text"
            value={img_Link}

            onChange={(e) => setimg_Link(e.target.value)}
            name="image_link"
            id="img_link"
            required
          />
          <br />
          <br />
          <button type="submit">Upload</button>
        </div>
      </form>
    </>
  );
};

export default MovieLinkData;
