import React, { useState, useEffect } from "react";
import { dt } from "../FireBase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
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
  //delete admin data
  const deleteadmindata = async (id) => {
    const a_id = doc(dt, "AdminRegister", id);
    await deleteDoc(a_id);
  };
  return (
    <>
      <div className="table-users">
        <div className="header">Admin Data</div>

        <table cellspacing="0">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete Data</th>
            </tr>
          </thead>
          {admin_data_show.map((value, ind) => {
            return (
              <>
                <tbody key={ind}>
                    <tr>
                      <td>{value.user_name}</td>
                      <td>{value.email}</td>
                      <td>{value.password}</td>
                      <td className="delete_btn">
                        <button
                          onClick={() => {
                            deleteadmindata(value.id);
                          }}
                          className="btn btn-warning"
                        >
                          <DeleteForeverIcon />
                          delete
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
  );
};

export default AdminAllData;
