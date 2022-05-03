import mongoose from "mongoose";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "../../css/Message.Style.module.css";
import { selectMessage } from "../../slices/messageSlice";
import Message from "./Message";

function MessageHandler() {
  const message = useSelector(selectMessage);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(message);
  }, [message]);

  return (
    <ul className={style.container}>
      {messages.map((value, i) => {
        return (
          <Message
            key={value.id}
            err={value.err}
            message={value.message}
            id={value.id}
          />
        );
      })}
    </ul>
  );
}

export default MessageHandler;
