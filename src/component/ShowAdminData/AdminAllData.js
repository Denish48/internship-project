import React, { useState, useEffect } from "react";
import { dt } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./AdminAllData.scss";

const AdminAllData = () => {
  const [admin_data_show, setAdmin_data_show] = useState([]);

  const dtds = collection(dt, "AdminRegister");
  //function for get data into database:
  const admindata_fetch = async () => {
    const data = await getDocs(dtds);
    console.log(data);
    await setAdmin_data_show(
      data.docs.reverse().map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  //when site load first time call the function and show the data:
  useEffect(() => {
    admindata_fetch();
  }, []);
  return (
    <>
      {/* <h2>Admin Members</h2>
      <div className="main_div">
        <div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Delete Admin</th>
              </tr>
            </thead>
            {admin_data_show.map((value, ind) => {
              return (
                <>
                  <tbody>
                    {ind % 2 === 0 ? (
                      <tr>
                        <td>{value.user_name}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td>
                          <button className="btn btn-danger">
                            <DeleteForeverIcon />
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr className="active-row">
                        <td>{value.user_name}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td>
                          <button className="btn btn-danger">
                            <DeleteForeverIcon />
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div> */}

      <div class="table-users">
        <div class="header">Admin Data</div>

        <table cellspacing="0">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delee Data</th>
            </tr>
          </thead>
          {admin_data_show.map((value, ind) => {
            return (
              <>
                <tbody>
                  {ind % 2 == 0 ? (
                    <tr>
                      <td>{value.user_name}</td>
                      <td>{value.email}</td>
                      <td>{value.password}</td>
                      <td>
                        <button className="btn btn-warning">delete</button>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>{value.user_name}</td>
                      <td>{value.email}</td>
                      <td>{value.password}</td>
                      <td>
                        <button className="btn btn-warning">delete</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default AdminAllData;
