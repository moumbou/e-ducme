import React from "react";
import ReactAvatar from "react-avatar";

function Message() {
  return (
    <div target="message">
      <div target="message-header">
        <ReactAvatar
          alt="profile-pic"
          src="https://avatars.githubusercontent.com/u/60050570?v=4"
          round={true}
          size={42}
        />
        <span>user name</span>
        <span>date and time</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, esse
        ipsam soluta tenetur iure repellat quaerat voluptatibus distinctio a,
        aliquam odit, tempora labore laudantium aspernatur illum architecto
        maxime totam perferendis?
      </p>
    </div>
  );
}

export default Message;
