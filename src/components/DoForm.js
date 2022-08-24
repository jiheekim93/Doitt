import React from "react";

const DoForm = () => {
  return (
    <>
      <form>
        <div>
          <div>
            <label>Title</label>
            <input type="text" />
          </div>
          <div>
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2023-12-31" />
          </div>
        </div>
        <div>
          <button type="submit">Add New Doitt</button>
        </div>
      </form>
    </>
  );
};

export default DoForm;
