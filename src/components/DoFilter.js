import React from "react";

const DoFilter = (props) => {
  const dropdwonChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Filter by year</label>
        <select value={props.mainYear} onChange={dropdwonChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default DoFilter;
