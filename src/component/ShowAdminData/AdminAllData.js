import React,{useState,useEffect} from 'react'
import { dt } from "../FireBase";
import {
  collection,
  getDocs
} from "firebase/firestore";

const AdminAllData = () => {
    const[admin_data_show,setAdmin_data_show]=useState([])

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
        <h2>Admin Members</h2>
        <div>
<table>
    <tr>
        <th>username</th>
        <th>email</th>
        <th>password</th>
        <th>Delete Data</th>
        </tr>

    {
        admin_data_show.map((val)=>
        {
            return(
                <>
                    <tr>
                        <td>{val.user_name}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                        <button>delete</button>
                    </tr>
                    
                </>
            )
        })
    }

</table>
</div>
        </>
    )
}

export default AdminAllData