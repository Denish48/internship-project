import React, { useState } from "react";

const MovieLinkData = () => {

  const [movie_Data, setMovie_Data] = useState({
    screenshot_link: "",
    link_480P: "",
    link_720P: "",
    img_link: ""
  })
  let name, value;
  const Upload_Data_Handler = (e) => {
    e.preventDefault()
    console.log(movie_Data)

    if (movie_Data !== " ") {
      alert("Sucessfully Upload")
    }
    setMovie_Data({
      screenshot_link: "",
      link_480P: "",
      link_720P: "",
      img_link: ""
    })
  }

  const MovieLinksGet = (e) => {
    name = e.target.name
    value = e.target.value
    setMovie_Data({ ...movie_Data, [name]: value })
  }

  return (
    <>
      <h1>Enter Movie Data</h1>
      <form onSubmit={Upload_Data_Handler} method="POST" >
        <label htmlFor="">Enter Screenshots Link:</label>
        <br />
        <input type="text" name="screenshot_link" value={movie_Data.screenshot_link} id="screenshot_link" onChange={MovieLinksGet} required />
        <br />
        <br />
        <label htmlFor="">Enter 480p Download Link:</label>
        <br />
        <input type="text" name="link_480P" id="link_480P" value={movie_Data.link_480P} onChange={MovieLinksGet} required />
        <br />
        <br />
        <label htmlFor="">Enter 720p Download Link:</label>
        <br />
        <input type="text" name="link_720P" id="link_720P" value={movie_Data.link_720P} onChange={MovieLinksGet} required />
        <br />
        <br />
        <div className="img_file_input">
          <label htmlFor="">Enter Img Link:</label>
          <br />
          <input type="text" name="img_link" id="img_link" value={movie_Data.img_link} onChange={MovieLinksGet} required />
          <br />
          <br />
          <button type="submit">Upload</button>
        </div>
      </form>
    </>
  );
};

export default MovieLinkData;
