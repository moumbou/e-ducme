import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import style from "../css/Modal.Style.module.css";
import { pushMessage } from "../slices/messageSlice";

function AddChannel({ setDisplay }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const token = localStorage.getItem("token");
    axios
      .post("/api/add-channel", data, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(({ data }) => {
        dispatch(pushMessage(data));
        reset();
        setDisplay(false);
      });
  };

  return (
    <div className={style.container}>
      <form className={style} onSubmit={handleSubmit(submit)}>
        <h3>ajouter un groupe</h3>
        <div data-target="content">
          <input
            type="text"
            placeholder="nom du groupe"
            {...register("channel", {
              required: true,
            })}
          />

          <div>
            <button onClick={() => setDisplay(false)} type="button">
              annuler
            </button>
            <button type="submit">ajouter</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddChannel;
