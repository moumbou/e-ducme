import React, { useEffect, useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../slices/messageSlice";

function Message({ message, err, id }) {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);

  const deleteHandler = () => {
    setHide((prev) => !prev);
    setTimeout(() => {
      dispatch(deleteMessage(id));
    }, 1000);
  };

  //* MAKE THE MESSAGE DELETE IT SELF AFTER AN AMOUNT OF TIME
  useEffect(() => {
    return setTimeout(() => {
      setHide((prev) => !prev);
      setTimeout(() => {
        dispatch(deleteMessage(id));
      }, 1000);
    }, 5000);
  }, []);
  return (
    <li data-hide={hide ? "true" : "false"} data-err={err ? "true" : "false"}>
      {err ? <TiWarningOutline /> : <AiOutlineCheckCircle />}
      <p>{message}</p>
      <FiDelete onClick={deleteHandler} />
    </li>
  );
}

export default Message;
