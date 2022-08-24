import React, { useState } from "react";
import Dos from "./components/Dos";
import NewDo from "./components/NewDo";

const DUMMY_DOS = [
  { date: new Date(2022, 7, 7), title: `Claire's birthday party` },
  { date: new Date(2022, 7, 23), title: "Go grocery shopping" },
  { date: new Date(2023, 3, 30), title: `Larry's engagement party` },
];

const App = () => {
  const [dos, setDos] = useState(DUMMY_DOS);

  const addDoDataHandler = (newDo) => {
    setDos((prevDos) => {
      return [newDo, ...prevDos];
    });
  };

  return (
    <>
      <div>
        <h1>Doitt!</h1>
        <NewDo onAddDoData={addDoDataHandler} />
        <Dos items={dos} />
      </div>
    </>
  );
};

export default App;
