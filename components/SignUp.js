import React from "react";
import styles from "../css/ConnexionPageStyle.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUser } from 'react-icons/hi'

function SignUp({ setPage }) {
  const clickHandler = () => {
    setPage("login");
  };

  return (
    <div className={styles.login}>
      <h2 className="title">s'enregistrer</h2>
      <small>
        vous avez deja un compte ?{" "}
        <span onClick={clickHandler} className={styles.spanBtn}>
          se connecter .
        </span>
      </small>

      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <input type="text" />
          <label>
            <HiUser />
            <span>nom</span>
          </label>
        </div>

        <div className={styles.input}>
          <input type="text" />
          <label>
            <HiUser />
            <span>prenom</span>
          </label>
        </div>

        <div className={styles.input}>
          <input type="text" />
          <label>
            <MdEmail />
            <span>email</span>
          </label>
        </div>

        <div className={styles.input}>
          <input type="password" />
          <label>
            <RiLockPasswordFill />
            <span>mot de passe</span>
          </label>
        </div>

        <div className={styles.input}>
          <input type="password" />
          <label>
            <RiLockPasswordFill />
            <span>confirmer le mot de passe</span>
          </label>
        </div>
      </div>

      <button style={{ marginTop: '10px' }} type="submit">inscription</button>
    </div>
  );
}

export default SignUp;
