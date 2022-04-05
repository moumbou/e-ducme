import React from "react";

function ButtonChannel({ id, active, setActive, name }) {
  const clickHandler = () => {
    setActive(id);
  };

  return (
    <li>
      <button
        onClick={clickHandler}
        active={`${active === id ? "true" : "false"}`}
      >
        {name} #
      </button>
    </li>
  );
}

export default ButtonChannel;
