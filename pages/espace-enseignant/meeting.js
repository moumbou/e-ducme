import MainContainer from "../../components/MainContainer";
import style from "../../css/Meeting.Style.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import axios from "axios";

function meeting() {
  const [meetingName, setMeetingName] = useState("");
  const [classe, setClasse] = useState("");
  const [date, setDate] = useState("");
  const [dateDebut, setDebut] = useState("");
  const [dateFin, setFin] = useState("");
  const [meeting, setMeeting] = useState(null);

  const debutOnChange = (e) => {
    const value = e.target.value;
    const heure = value.split(":")[0];
    const minute = value.split(":")[1];

    const isNull = dateFin.length ? false : true;
    if (isNull) return setDebut(value);

    const first = new Date().setHours(heure, minute, 0, 0);

    const Sheure = dateFin.split(":")[0];
    const Sminute = dateFin.split(":")[1];

    const seconde = new Date().setHours(Sheure, Sminute, 0, 0);

    if (first < seconde) return setDebut(value);
  };

  const finOnChange = (e) => {
    const value = e.target.value;
    const heure = value.split(":")[0];
    const minute = value.split(":")[1];

    const isNull = dateDebut.length ? false : true;
    if (isNull) return setFin(value);

    const first = new Date().setHours(heure, minute, 0, 0);

    const Sheure = dateDebut.split(":")[0];
    const Sminute = dateDebut.split(":")[1];

    const seconde = new Date().setHours(Sheure, Sminute, 0, 0);

    if (first > seconde) return setFin(value);
  };

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
    if (!dateDebut.length || !dateFin.length || !date.length || !classe.length)
      return console.error("please make sure to complet the formular");

    //* GET HOURS AND MINUTES FROM THE INPUTES
    const heureD = dateDebut.split(":")[0];
    const minD = dateDebut.split(":")[1];

    const heureF = dateFin.split(":")[0];
    const minF = dateFin.split(":")[1];

    //* SET THE BEGINNING OF THE MEETING
    const debut = new Date(date).setHours(heureD, minD);
    const fin = new Date(date).setHours(heureF, minF);

    const input = document.getElementById("meeting-input");
    if (!meetingName) return input.focus();

    const token = localStorage.getItem("token");

    axios
      .post(
        "/api/add-meeting",
        {
          meetingName,
          debut,
          fin,
          classe,
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
              ? `votre rendez vous est créer`
              : `entrez le nom du meeting`}
          </span>
          <input
            id="meeting-input"
            type="text"
            placeholder="exp: myRoom"
            onChange={(e) => setMeetingName(e.target.value)}
            value={meeting ? meeting.nom : meetingName}
            disabled={meeting ? true : false}
          />

          {meeting ? (
            <>
             <span data-target="details">debut : {new Date(meeting.dateDebut).toLocaleString()}</span>
             <span data-target="details">fin : {new Date(meeting.dateFin).toLocaleString()}</span>
            </>
          ) : (
            <>
              <span>date du meeting</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <div data-target="time-container">
                <div>
                  <span>heure de debut</span>
                  <input
                    type="time"
                    value={dateDebut}
                    onChange={debutOnChange}
                  />
                </div>

                <div>
                  <span>heure de fin</span>
                  <input type="time" value={dateFin} onChange={finOnChange} />
                </div>
              </div>
            </>
          )}

          <span>nom de la classe</span>
          <input
            type="text"
            placeholder="ex: L3 Math & info"
            value={meeting ? meeting.classe : classe}
            onChange={(e) => setClasse(e.target.value)}
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
