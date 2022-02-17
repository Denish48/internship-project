import React, { useState } from "react";

const MovieLinkData = () => {
  //state for getinput data from form:
  const [movie_Data, setMovie_Data] = useState({
    screenshot_link: "",
    link_480P: "",
    link_720P: "",
    img_link: "",
  });

  let name, value;

  //onChange event function for input value:
  const MovieLinksGet = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMovie_Data({ ...movie_Data, [name]: value });
  };
  //onsubmit handler for this form:
  const Upload_Data_Handler = async (e) => {
    e.preventDefault();
    console.log(movie_Data);
    const { screenshot_link, link_480P, link_720P, img_link } = movie_Data;

    //condition for when upload the data:

    const Responce = fetch(
      "https://moviedata-9c10b-default-rtdb.firebaseio.com/moviealldata.json",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          screenshot_link,
          link_480P,
          link_720P,
          img_link,
        }),
      }
    );

    if (Responce) {
      alert("data update sucessfully")
      setMovie_Data({
        screenshot_link: "",
        link_480P: "",
        link_720P: "",
        img_link: "",
      })

    }
  };


  return (
    <>
      {/* button for add new admin user */}
      <div>
        <button>Add New Admin</button>
      </div>
      <h1>Enter Movie Data</h1>
      <form onSubmit={Upload_Data_Handler} method="POST">
        <label htmlFor="">Enter Screenshots Link:</label>
        <br />
        <input
          type="text"
          name="screenshot_link"
          value={movie_Data.screenshot_link}
          id="screenshot_link"
          onChange={MovieLinksGet}
          required
        />
        <br />
        <br />
        <label htmlFor="">Enter 480p Download Link:</label>
        <br />
        <input
          type="text"
          name="link_480P"
          id="link_480P"
          value={movie_Data.link_480P}
          onChange={MovieLinksGet}
          required
        />
        <br />
        <br />
        <label htmlFor="">Enter 720p Download Link:</label>
        <br />
        <input
          type="text"
          name="link_720P"
          id="link_720P"
          value={movie_Data.link_720P}
          onChange={MovieLinksGet}
          required
        />
        <br />
        <br />
        <div className="img_file_input">
          <label htmlFor="">Enter Img Link:</label>
          <br />
          <input
            type="text"
            name="img_link"
            id="img_link"
            value={movie_Data.img_link}
            onChange={MovieLinksGet}
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
