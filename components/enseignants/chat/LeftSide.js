import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ButtonChannel from "./ButtonChannel";

function LeftSide() {
  const [active, setActive] = useState();

  return (
    <div target="channel-side">
      <h3 target="title">groupe de chat</h3>

      <button target="add-button">
        <IoIosAddCircle size={20} /> ajouter un groupe
      </button>

      <ul target="list-groupe">
        <ButtonChannel
          active={active}
          id={1}
          name="groupe 1"
          setActive={setActive}
          key={1}
        />
        <ButtonChannel
          active={active}
          id={2}
          name="groupe 2"
          setActive={setActive}
          key={2}
        />
        <ButtonChannel
          active={active}
          id={3}
          name="groupe 3"
          setActive={setActive}
          key={3}
        />
      </ul>
    </div>
  );
}

export default LeftSide;
