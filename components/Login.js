import styles from "../css/ConnexionPageStyle.module.css";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Login({ setPage }) {

  const clickHandler = () => {
    setPage('register')
  }

  return (
    <div className={styles.login}>
      <h2 className="title">se connecter</h2>
      <small>
        vous n'avez pas de compte ? <span onClick={clickHandler} className={styles.spanBtn}>s'enregistrer .</span>
      </small>

      <div className={styles.inputContainer}>
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
      </div>

      <small>
        <span>mot de passe oublier ?</span>
        <Link href={"/"}>
          <a>cliquez ici</a>
        </Link>
      </small>
      <button type="submit">connexion</button>
    </div>
  );
}

export default Login;
