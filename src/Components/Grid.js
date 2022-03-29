import React, { useState } from "react";

function Grid() {
  const [clicked, setClicked] = useState("item");

  const arr = [1, 2, 3, "D", "T", "P"];

  function handleClick() {
    setClicked("item-clicked");
  }

  const arrGrid = arr.map((item) => {
    return (
      <div onClick={handleClick} className={clicked}>
        {item}
      </div>
    );
  });

  return <div className="grid-container">{arrGrid}</div>;
}

export default Grid;
