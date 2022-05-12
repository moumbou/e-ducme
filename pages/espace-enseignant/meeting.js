import MainContainer from "../../components/MainContainer";
import style from "../../css/Meeting.Style.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import axios from "axios";

function meeting() {
  const [meetingName, setMeetingName] = useState("");
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("/api/get-meeting", {
        headers: {
          "x-access-token": token,
        },
      })
      .then(({ data }) => {
        const { exist } = data;
        setMeeting(exist);
      })
      .catch(console.log);
  }, []);

  const createMeeting = () => {
    const input = document.getElementById("meeting-input");
    if (!meetingName) return input.focus();

    const token = localStorage.getItem("token");

    axios
      .post(
        "/api/add-meeting",
        {
          meetingName,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then(({ data }) => {
        const { meeting } = data;
        setMeeting(meeting);
      })
      .catch(console.log);
  };

  const goToUrl = () => {
    window
      .open(`https://meet.jit.si/${meeting ? meeting.nom : "myRoom"}`, "_blank")
      .focus();
  };

  const stopMeeting = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "/api/delete-meeting",
        {
          id: meeting._id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then(() => setMeeting(null))
      .catch(console.log);
  };

  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.content}>
          <Icon icon="fluent:meet-now-16-filled" />
          <h3>bien venu dans le meeting section !</h3>

          <span>
            {meeting
              ? `votre meeting est en cours`
              : `entrez le nom du meeting`}
          </span>
          {meeting ? (
            <span>créer le {new Date(meeting.date).toLocaleString()}</span>
          ) : (
            <></>
          )}
          <input
            id="meeting-input"
            type="text"
            placeholder="exp: myRoom"
            onChange={(e) => setMeetingName(e.target.value)}
            value={meeting ? meeting.nom : meetingName}
            disabled={meeting ? true : false}
          />
          <button onClick={meeting ? goToUrl : createMeeting}>
            {meeting ? `rejoindre votre meeting` : `creer un meeting`}
          </button>
          {meeting ? (
            <button color="danger" onClick={stopMeeting}>
              arreter votre meeting
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </MainContainer>
  );
}

export default meeting;
