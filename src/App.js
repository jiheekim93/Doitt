import React from "react";
import DoItems from "./components/DoItems";
import NewDo from "./components/NewDo";
const App = () => {
  const dos = [
    { date: new Date(2022, 7, 7), title: `Claire's birthday party` },
    { date: new Date(2022, 7, 23), title: "Go grocery shopping" },
    { date: new Date(2021, 7, 30), title: `Larry's engagement party` },
  ];
  return (
    <>
      <div>
        <h1>Doitt!</h1>
        <NewDo />
        <DoItems items={dos} />
      </div>
    </>
  );
};

export default App;
