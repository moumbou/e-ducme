import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ButtonChannel from "./ButtonChannel";
import pusherJs from "pusher-js";
import axios from "axios";

function LeftSide({ setDisplay }) {
  const [active, setActive] = useState();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    let pusher = new pusherJs("aafde64eb21cf5247385", {
      cluster: "eu",
    });

    let channel = pusher.subscribe("channels");
    channel.bind("channel", function (data) {
      axios.get("/api/get-channels").then(({ data }) => {
        setChannels(data.channels);
      });
    });

    axios.get("/api/get-channels").then(({ data }) => {
      setChannels(data.channels);
    });
  }, []);

  return (
    <div target="channel-side">
      <h3 target="title">groupe de chat</h3>

      <button target="add-button" onClick={() => setDisplay(true)}>
        <IoIosAddCircle size={20} /> ajouter un groupe
      </button>

      <ul target="list-groupe">
        {channels ? (
          channels.map((val) => {
            return (
              <ButtonChannel
                active={active}
                id={val._id}
                name={val.channel}
                setActive={setActive}
                key={val._id}
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default LeftSide;
