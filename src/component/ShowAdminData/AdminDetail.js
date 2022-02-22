import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router";

const AdminDetail = () => {
  const [admin_detail, setAdmin_detail] = useState(false);
const redirect2=useNavigate()
  
  const s_admin_detail = () => {
      redirect2("/AdminAllData")
    };
    
    
  return (
    <>
      {!admin_detail && (
        <>
          <button onClick={s_admin_detail}>Admin Detail</button>
        </>
      )}
      
    </>
  );
};

export default AdminDetail;
