import React from "react";
import DoLists from "./DoLists";
const DoItems = (props) => {
  return (
    <>
      <DoLists title={props.items[0].title} date={props.items[0].date} />
      <DoLists title={props.items[1].title} date={props.items[1].date} />
      <DoLists title={props.items[2].title} date={props.items[2].date} />
    </>
  );
};

export default DoItems;
