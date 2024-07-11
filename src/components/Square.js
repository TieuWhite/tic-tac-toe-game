import React from "react";

function Square({ handleClick, value }) {
  return (
    <button onClick={handleClick} className={"square"}>
      {value}
    </button>
  );
}

export default Square;
