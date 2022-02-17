import React from "react";

const MovieLinkData = () => {
  return (
    <>
      <h1>Enter Movie Data</h1>
      <form>
        <label htmlFor="">Enter Screenshots Link:</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Enter 480p Download Link:</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Enter 720p Download Link:</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <div className="img_file_input">
          <label htmlFor="">Enter Img Link:</label>
          <br />
          <input type="file" />
          <br />
          <br />
        </div>
      </form>
    </>
  );
};

export default MovieLinkData;
