import React from "react";
import { useDispatch } from "react-redux";
import { setChannel } from "../../../slices/channelSlice";

function ButtonChannel({ id, active, setActive, name }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    setActive(id);
    dispatch(
      setChannel({
        name,
        id,
      })
    );
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
