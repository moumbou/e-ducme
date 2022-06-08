import MainContainer from "../../components/MainContainer";
import style from "../../css/Meeting.Style.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import axios from "axios";
import pusherJs from "pusher-js";

function meeting() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("/api/get-meetings", {
        headers: {
          "x-access-token": token,
        },
      })
      .then(({ data }) => {
        const { meetings } = data;
        setMeetings(meetings);
      })
      .catch(console.log);

    let pusher = new pusherJs("aafde64eb21cf5247385", {
      cluster: "eu",
    });

    let channel = pusher.subscribe("meetings");
    channel.bind("meeting", function () {
      axios
        .get("/api/get-meetings", {
          headers: {
            "x-access-token": token,
          },
        })
        .then(({ data }) => {
          const { meetings } = data;
          setMeetings(meetings);
        })
        .catch(console.log);
    });
  }, []);

  const goToUrl = (meetingName) => {
    window.open(`https://meet.jit.si/${meetingName}`, "_blank").focus();
  };

  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.content} data-target="meetings">
          <Icon icon="fluent:meet-now-16-filled" />
          <h3>bienvenu dans la liste des meetings !</h3>
          {meetings.length ? (
            <ul data-target="meeting-list">
              {meetings.map((value) => {
                return (
                  <li key={value._id} onClick={() => goToUrl(value.nom)}>
                    <p>Enseignant: {value.prof.toUpperCase()}</p>
                    <p>Classe: {value.classe}</p>
                    <p>
                      Debut du meeting:{" "}
                      {new Date(value.dateDebut).toLocaleDateString()} à{" "}
                      {new Date(value.dateDebut).toLocaleTimeString()}
                    </p>
                    <p>
                      Fin du meeting:{" "}
                      {new Date(value.dateFin).toLocaleDateString()} à{" "}
                      {new Date(value.dateFin).toLocaleTimeString()}
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <span>aucun meeting n'est prevu !</span>
          )}
        </div>
      </div>
    </MainContainer>
  );
}

export default meeting;
