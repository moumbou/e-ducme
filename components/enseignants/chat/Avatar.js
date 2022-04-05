import React from "react";
import Avatar from "react-avatar";

function AvatarProfile({ src, translate }) {
  return (
    <div target="avatar-div-container" style={{ transform: `translateX(-${translate}%)` }}>
      <Avatar
        alt="profile-pic"
        src={src}
        round={true}
        size={34}
      />
    </div>
  );
}

export default AvatarProfile;
