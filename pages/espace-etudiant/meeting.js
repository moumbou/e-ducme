import MainContainer from "../../components/MainContainer";
import style from "../../css/Meeting.Style.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import pusherJs from "pusher-js";
import { pushMessage } from "../../slices/messageSlice";

function meeting() {
  const [meetings, setMeetings] = useState([]);
  const dispatch = useDispatch();

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

  const goToUrl = (meetingName, debut, fin) => {
    const date = new Date();
    const now = new Date().setHours(
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      0
    );
    const isAllowed = now >= debut && now < fin ? true : false;

    if (isAllowed) {
      const token = localStorage.getItem("token");
      axios.post(
        "/api/add-presence",
        {
          meeting: meetingName,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      return window
        .open(`https://meet.jit.si/${meetingName}`, "_blank")
        .focus();
    }

    dispatch(
      pushMessage({
        err: true,
        message: `le meeting n'a toujours pas commencé !`,
      })
    );
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
                  <li
                    key={value._id}
                    onClick={() =>
                      goToUrl(value.nom, value.dateDebut, value.dateFin)
                    }
                  >
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
