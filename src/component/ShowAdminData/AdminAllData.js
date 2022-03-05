import React, { useState, useEffect } from "react";
import { dt } from "../FireBase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./AdminAllData.scss";
import EditIcon from "@mui/icons-material/Edit";
// import { Firestore } from "firebase/firestore";
// import firestore from "firebase/firestore"

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
    // window.history.replaceState(null, null, "/");

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
//   //function for update the data:
//   const update_admin_data = async (data) => {
//     const datas = doc(dt, "AdminRegister")
//     let v = prompt("AdminRegister",data);
// let update_admin_data={email:v}
//     await updateDoc(datas, update_admin_data)
//     console.log("update");
//   }


const update_admin_data=()=>
{
  console.log("updated")
  // firestore()
  // .collection('AdminRegister')
  // .doc('dt')
  // .update({
  //   email: 31,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });
}

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
              <th>Update Data</th>
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
                        className="btn btn-danger"
                      >
                        <DeleteForeverIcon />
                        delete
                      </button>
                    </td>

                    <td>
                      <button className="btn btn-primary" onClick={()=>update_admin_data(value.email,value.id)}>
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
  );
};

export default AdminAllData;
