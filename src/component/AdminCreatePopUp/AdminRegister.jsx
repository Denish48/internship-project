import React, { useState } from "react";


const AdminRegister = () => {
    const [add_page_Render, setAdd_page_Render] = useState(false)

    const show_form = () => {

        setAdd_page_Render(true)

    }

    return (
        <>
            {
                !add_page_Render && (

                    <button className="btn btn-success" onClick={show_form}>Add New Admin</button>
                )
            }
            {
                add_page_Render && (<h1>hello</h1>)
            }
        </>
    );
};

export default AdminRegister;
