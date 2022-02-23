import React, { useState, useEffect } from "react";
import { dt } from "../FireBase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "./MovieList.scss";

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
  //this state and function for update the value in given table:

  const [moviedata, setMoviedata] = useState(false);

  const MovieDataUpdate = () => {
    setMoviedata(true);
  };
  return (
    <>
      {!movie_list && (
        <>
          <button className="btn btn-warning" onClick={show_list}>
            show movie list
          </button>
        </>
      )}

      {movie_list && (
        <>
          <button className="btn btn-warning" onClick={hide_list}>
            Hide movie list
          </button>
          <div className="table-users">
            <div className="header">Movie List</div>

            <table cellspacing="0">
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>unique_id</th>
                  <th>Delete Data</th>
                  <th>Update Data</th>
                </tr>
              </thead>
              {all_list_data.map((value, ind) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        {/* <td>{value.movie_Name}</td> */}
                        {moviedata ? (
                          <td>
                            <input type="text" value={value.movie_Name} />
                          </td>
                        ) : (
                          <td>{value.movie_Name}</td>
                        )}
                        <td>{value.uni_ID}</td>
                        <td>
                          <button
                            onClick={() => {
                              DeleteData(value.id);
                            }}
                            className="btn btn-warning"
                          >
                            <DeleteForeverIcon />
                            delete
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={MovieDataUpdate}
                          >
                            <EditIcon />
                            Update
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default MovieList;
