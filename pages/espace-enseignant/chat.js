import React from "react";
import LeftSide from "../../components/enseignants/chat/LeftSide";
import MainContainer from "../../components/MainContainer";
import Style from "../../css/Chat.Style.module.css";
import AvatarContainer from "../../components/enseignants/chat/AvatarContainer";
import Message from "../../components/enseignants/chat/Message";

function chat() {

  const test = [1,1,1,1,1,1,1,1,1]

  return (
    <MainContainer>
      <div className={Style.container}>
        <LeftSide />
        <div target="chat-side">
          <div target="header">
            <h3 target="header-title">groupe name #</h3>
            <AvatarContainer />
          </div>
          <div target="messages-cotnainer">
            {
              test.map((val, i) => {
                return <Message key={i} />
              })
            }
          </div>
          <div target="inputs-container">input</div>
        </div>
      </div>
    </MainContainer>
  );
}

export default chat;
