import React from "react";
import ReactAvatar from "react-avatar";

function Message({ value }) {
  return (
    <div target="message">
      <div target="message-header">
        <ReactAvatar
          alt="profile-pic"
          src="https://avatars.githubusercontent.com/u/60050570?v=4"
          round={true}
          size={42}
        />
        <span>
          {value.userName} {value.userPrenom}
        </span>
        <span>{new Date(value.dateTime).toLocaleString()}</span>
      </div>
      <p>{value.message}</p>
    </div>
  );
}

export default Message;
