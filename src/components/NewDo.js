import React from "react";
import DoForm from "./DoForm";
const NewDo = (props) => {
  const savedDoDataHandler = (savedDoData) => {
    const doData = {
      ...savedDoData,
      id: Math.random().toString,
    };
    props.onAddDoData(doData);
  };

  return (
    <>
      <div>
        <DoForm onSavedDoData={savedDoDataHandler} />
      </div>
    </>
  );
};

export default NewDo;
