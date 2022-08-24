import React from "react";
import DoItem from "./DoItem";
const Dos = (props) => {
  return (
    <>
      <DoItem title={props.items[0].title} date={props.items[0].date} />
      <DoItem title={props.items[1].title} date={props.items[1].date} />
      <DoItem title={props.items[2].title} date={props.items[2].date} />
    </>
  );
};

export default Dos;
