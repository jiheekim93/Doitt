import React, { useState } from "react";
import DoDates from "./DoDates";

const DoItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!");
  };

  return (
    <>
      <DoDates date={props.date} />
      <h3>{title}</h3>
      <button onClick={clickHandler}>Change Title</button>
    </>
  );
};

export default DoItem;
