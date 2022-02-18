import React from "react";

const HomePage = () => {




  return (
    <>
      <h1>Movie List</h1>
      <div className="main_div">
        <div className="image_set_div">
          <img src="img_link" alt="" />
        </div>
        <div className="download_link_div">
          <a href="link_480P">480P</a>
          <br />
          <a href="link_720P">720P</a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
