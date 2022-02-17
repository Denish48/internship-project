import React from "react";

const HomePage = () => {


  return (
    <>
      <h1>Movie List</h1>
      <div className="main_div">
        <div className="image_set_div">
          <img src="https://m.media-amazon.com/images/M/MV5BMzUxNGIyY2MtNDUxZC00YWY1LTg0MzctM2ExNTNmODlhMTRlXkEyXkFqcGdeQXVyMTE4Nzk0MzE4._V1_SX300.jpg" alt="" />
        </div>
        <div className="download_link_div">
          <a href="#">480P</a><br />
          <a href="#">720P</a>
        </div>
      </div>

    </>
  );
};

export default HomePage;
