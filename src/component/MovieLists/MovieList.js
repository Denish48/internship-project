import React, { useState, useEffect } from "react";
import { dt } from "../FireBase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MovieList = () => {
  const [movie_list, setMovie_list] = useState(false);
  const [all_list_data, setAll_list_data] = useState([]);
  const show_list = () => {
    setMovie_list(true);
  };
  const dtds = collection(dt, "AllMovieData");
  const hide_list = () => {
    setMovie_list(false);
  };

  //function for get data into database:
  const movienamedata = async () => {
    const data = await getDocs(dtds);
    console.log(data);
    await setAll_list_data(
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
      {!movie_list && <button onClick={show_list}>show movie list</button>}
      {movie_list && (
        <>
          <div>
            <button onClick={hide_list}>Hide movie list</button>
            <h2>Movie's List</h2>

            <div className="table_content">
              <table>
                <tr>
                  <th>Movie Name</th>
                  <th>Unique_ID</th>
                  <th>Delete Data</th>
                </tr>
                {all_list_data.map((element, index) => {
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
      )}
    </>
  );
};

export default MovieList;
