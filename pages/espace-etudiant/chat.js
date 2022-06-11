import React, { useEffect, useState } from "react";
import LeftSide from "../../components/enseignants/chat/LeftSide";
import MainContainer from "../../components/MainContainer";
import Style from "../../css/Chat.Style.module.css";
import AvatarContainer from "../../components/enseignants/chat/AvatarContainer";
import Message from "../../components/enseignants/chat/Message";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { getChannel } from "../../slices/channelSlice";
import pusherJs from "pusher-js";

function chat() {
  const { register, handleSubmit, reset } = useForm();
  const channelInfo = useSelector(getChannel);
  const [messages, setMessages] = useState([]);

  const submit = (data) => {
    if (!channelInfo) return alert("veillez selectionnez un groupe");
    const token = localStorage.getItem("token");

    axios
      .post(
        "/api/add-message",
        {
          message: data.message,
          dateTime: new Date(),
          channelID: channelInfo.id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then(() => reset());
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    let pusher = new pusherJs("aafde64eb21cf5247385", {
      cluster: "eu",
    });

    let channel = pusher.subscribe("messages");
    channel.bind("message", function (data) {
      if (channelInfo && channelInfo.id === data.channelID)
        axios
          .post(
            "/api/get-messages",
            {
              channelID: channelInfo.id,
            },
            {
              headers: {
                "x-access-token": token,
              },
            }
          )
          .then(({ data }) => {
            setMessages(data);
          });
    });

    if (channelInfo)
      axios
        .post(
          "/api/get-messages",
          {
            channelID: channelInfo.id,
          },
          {
            headers: {
              "x-access-token": token,
            },
          }
        )
        .then(({ data }) => {
          setMessages(data);
        });
  }, [channelInfo]);

  return (
    <>
      <MainContainer>
        <div className={Style.container}>
          <LeftSide hideButton={true} />
          <div target="chat-side">
            <div target="header">
              <h3 target="header-title">
                {channelInfo ? channelInfo.name : "nom du groupe"} #
              </h3>
              <AvatarContainer />
            </div>
            <div target="messages-cotnainer">
              {messages ? (
                messages.map((val, i) => {
                  console.log(val);
                  return <Message key={val._id} value={val} />;
                })
              ) : (
                <></>
              )}
            </div>
            <form onSubmit={handleSubmit(submit)} target="inputs-container">
              <input
                type="text"
                placeholder={`envoyez un message au @${
                  channelInfo ? channelInfo.name : "nom du groupe"
                }`}
                {...register("message", {
                  required: true,
                })}
              />
              <button type="submit">
                <Icon icon="akar-icons:send" />
              </button>
            </form>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default chat;
