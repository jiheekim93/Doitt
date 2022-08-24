import React, { useState } from "react";
import DoItem from "./DoItem";
import DoFilter from "./DoFilter";

const Dos = (props) => {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("Dos.js");
    setYear(selectedYear);
  };

  return (
    <>
      <DoFilter mainYear={year} onFilterChange={filterChangeHandler} />
      <DoItem title={props.items[0].title} date={props.items[0].date} />
      <DoItem title={props.items[1].title} date={props.items[1].date} />
      <DoItem title={props.items[2].title} date={props.items[2].date} />
    </>
  );
};

export default Dos;
