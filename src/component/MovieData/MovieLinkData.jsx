import React, { useState, useEffect } from "react";
//import database from firebase file:
import { dt } from "../FireBase";
//import the required value from firestore
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import "../MovieData/MovieLinkData.css";
import { v4 as uuidv4 } from "uuid";
import AdminRegister from "../AdminCreatePopUp/AdminRegister";
import AdminDetail from "../ShowAdminData/AdminDetail";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MovieLinkData = () => {
  //state for getinput data from form:
  const [screen_Link, setScreen_Link] = useState("");
  const [down480P_Link, setDown480P_Link] = useState("");
  const [down720P_Link, setDown720P_Link] = useState("");
  const [img_Link, setimg_Link] = useState("");
  const [movie_Name, setMovie_Name] = useState("");
  //this state generate date id and after that store into database:
  const [uni_ID, setUni_ID] = useState(
    `${new Date().toLocaleDateString()} uuid: ${uuidv4()}`
  );

  //store the databse data into this array:
  const [data_Show, setData_Show] = useState([]);

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
    setUni_ID(`${new Date().toLocaleDateString()} uuid: ${uuidv4()}`);

    //console data :
    // console.log(screen_Link);
    // console.log(down480P_Link);
    // console.log(down720P_Link);
    // console.log(img_Link);
    //function call for data store into firebase database after that form will be clear:
    if (addMovieLinks()) {
      setMovie_Name("");
      setScreen_Link("");
      setDown480P_Link("");
      setDown720P_Link("");
      setimg_Link("");
    }
  };

  //function for get data into database:
  const movienamedata = async () => {
    const data = await getDocs(dtds);
    console.log(data);
    await setData_Show(
      data.docs.reverse().map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  //when site load first time call the function and show the data:
  useEffect(() => {
    movienamedata();
  }, []);

  //for delete the data:
  const DeleteData = async (id) => {
    const d_id = doc(dt, "AllMovieData", id);
    await deleteDoc(d_id);
  };

  return (
    <>
      {/* button for add new admin user */}
      <div className="admin_button">
        <AdminRegister />
      </div>
      <div>
        <AdminDetail />
      </div>
      <div className="data-file">
        <h2>Enter Movie Data</h2>
        <form onSubmit={All_Data_Handler}>
          <input type="text" value={uni_ID} hidden name="uni_ID" id="uni_ID" />
          <div className="img_file_input form-group">
            <label>Enter Movie Name:</label>
            <input
              type="text"
              name="movie_Name"
              id="movie_Name"
              value={movie_Name}
              onChange={(e) => setMovie_Name(e.target.value)}
              required
              autoComplete="off"
              class="form-control"
            />
          </div>
          <div className="img_file_input form-group">
            <label htmlFor="">Enter Img Link:</label>
            <input
              type="text"
              value={img_Link}
              onChange={(e) => setimg_Link(e.target.value)}
              name="image_link"
              id="img_link"
              required
              autoComplete="off"
              class="form-control"
            />
          </div>
          <div className="img_file_input form-group">
            <label htmlFor="">Enter Screenshots Link:</label>
            <input
              type="text"
              value={screen_Link}
              onChange={(e) => setScreen_Link(e.target.value)}
              name="screenshot_link"
              id="screenshot_link"
              required
              autoComplete="off"
              class="form-control"
            />
          </div>

          <div className="img_file_input form-group">
            <label htmlFor="">Enter 480p Download Link:</label>
            <input
              type="text"
              value={down480P_Link}
              onChange={(e) => setDown480P_Link(e.target.value)}
              name="link_480P"
              id="link_480P"
              required
              autoComplete="off"
              class="form-control"
            />
          </div>

          <div className="img_file_input form-group">
            <label htmlFor="">Enter 720p Download Link:</label>
            <input
              type="text"
              value={down720P_Link}
              onChange={(e) => setDown720P_Link(e.target.value)}
              name="link_720P"
              id="link_720P"
              required
              autoComplete="off"
              placeholder="Enter 720p Download Link"
              class="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2>Movie's List</h2>

        <div className="table_content">
          <table>
            <tr>
              <th>Movie Name</th>
              <th>Unique_ID</th>
              <th>Delete Data</th>
            </tr>
            {data_Show.map((element, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{element.movie_Name}</td>
                    <td>{element.uni_ID}</td>
                    <td>
                      <button
                        onClick={() => {
                          DeleteData(element.id);
                        }}
                        className="btn btn-danger"
                      >
                        <DeleteForeverIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}

            {/* <tbody>, <thead> or <tfoot>  */}
          </table>
        </div>
      </div>
    </>
  );
};

export default MovieLinkData;
