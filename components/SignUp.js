import React, { useState } from "react";
import styles from "../css/ConnexionPageStyle.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiErrorWarningLine } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pushMessage } from "../slices/messageSlice";

function SignUp({ setPage }) {
  const dispatch = useDispatch();
  const [isValid, setValidation] = useState(true);
  const [pass, setPass] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //? WHEN SUBMIT BUTTON IS CLICKED
  const onSubmit = (obj) => {
    //? CHECK IF THE PASSWORD IS VALID
    if (!isValid) return;
    const result = Object.assign(obj, {
      role: "prof",
    });
    //? SET A CONFIGURATION FOR AXIOS
    const config = {
      method: "post",
      url: `/api/signUp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: result,
    };

    //? SEND A REQUEST AND WAIT FOR THE RESPONSE
    axios(config)
      .then(({ data }) => {
        //* SHOW MESSAGE TO THE USER
        dispatch(
          pushMessage({
            err: data.err,
            message: data.message,
          })
        );
        reset();
      })
      .catch(({ response }) => {
        const data = response.data;
        //* SHOW ERROR MESSAGE
        dispatch(
          pushMessage({
            err: data.err,
            message: data.message,
          })
        );
      });
  };

  const clickHandler = () => {
    setPage("login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
      <h2 className="title">s'enregistrer</h2>
      <small>
        vous avez deja un compte ?{" "}
        <span onClick={clickHandler} className={styles.spanBtn}>
          se connecter .
        </span>
      </small>

      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <input
            type="text"
            {...register("nom", {
              required: true,
            })}
          />
          <label data-valid={watch("nom") ? "true" : ""}>
            <HiUser />
            <span>nom</span>
            {errors.nom ? <RiErrorWarningLine data-color="warning" /> : <></>}
          </label>
        </div>

        <div className={styles.input}>
          <input
            type="text"
            {...register("prenom", {
              required: true,
            })}
          />
          <label data-valid={watch("prenom") ? "true" : ""}>
            <HiUser />
            <span>prenom</span>
            {errors.prenom ? (
              <RiErrorWarningLine data-color="warning" />
            ) : (
              <></>
            )}
          </label>
        </div>

        <div className={styles.input}>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /(.+)@(.+){2,}\.(.+){2,}/,
            })}
          />
          <label data-valid={watch("email") ? "true" : ""}>
            <MdEmail />
            <span>email</span>
            {errors.email ? <RiErrorWarningLine data-color="warning" /> : <></>}
          </label>
        </div>

        <div className={styles.input}>
          <input
            type="password"
            {...register("password", {
              required: true,
              onChange: (e) => setPass(e.target.value),
            })}
          />
          <label data-valid={watch("password") ? "true" : ""}>
            <RiLockPasswordFill />
            <span>mot de passe</span>
            {errors.password ? (
              <RiErrorWarningLine data-color="warning" />
            ) : (
              <></>
            )}
          </label>
        </div>

        <div className={styles.input}>
          <input
            type="password"
            {...register("passwordValidation", {
              required: true,
              onChange: (e) => {
                if (e.target.value !== pass) return setValidation(false);
                else return setValidation(true);
              },
            })}
          />
          <label data-valid={watch("passwordValidation") ? "true" : ""}>
            <RiLockPasswordFill />
            <span>confirmer le mot de passe</span>
            {errors.passwordValidation || !isValid ? (
              <RiErrorWarningLine data-color="warning" />
            ) : (
              <></>
            )}
          </label>
        </div>
      </div>

      <button style={{ marginTop: "10px" }} type="submit">
        inscription
      </button>
    </form>
  );
}

export default SignUp;
