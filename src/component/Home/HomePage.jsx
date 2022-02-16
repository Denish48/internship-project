import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [allData, setAllData] = useState([]);

  const APIData = async () => {
    const Responce = await fetch("https://eems.elsnerit.com//api/employees/employeesDropdownList");
    const res = await Responce.json();
    console.log(res);
    setAllData(res.data);
    console.log("alldata", allData);
  };
  useEffect(() => {
    APIData();
  }, []);
  return (
    <>
      <h1>Movies Name</h1>
      {allData.map((val) => {
        return (
          <>
            <h1>{val.first_name} {val.last_name}</h1>
          </>
        );
      })}
    </>
  );
};

export default HomePage;
