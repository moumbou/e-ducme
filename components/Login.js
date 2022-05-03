import styles from "../css/ConnexionPageStyle.module.css";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiErrorWarningLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pushMessage } from "../slices/messageSlice";
import { setUser } from "../slices/userSlice";
import { useRouter } from "next/router";

function Login({ setPage }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const clickHandler = () => {
    setPage("register");
  };

  const onSubmit = (data) => {
    const config = {
      method: "post",
      url: `/api/signIn`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };
    axios(config)
      .then(({ data }) => {
        dispatch(
          pushMessage({
            err: data.err,
            message: data.message,
          })
        );

        const { user, token } = data;
        if (user && token) {
          localStorage.setItem("token", token);
          dispatch(setUser(user));
          if (user.role.includes("prof")) router.push("/espace-enseignant");
        }
        reset();
      })
      .catch(({ response }) => {
        const data = response.data;
        console.log(data.err);
        dispatch(
          pushMessage({
            err: data.err,
            message: data.message,
          })
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
      <h2 className="title">se connecter</h2>
      <small>
        vous n'avez pas de compte ?{" "}
        <span onClick={clickHandler} className={styles.spanBtn}>
          s'enregistrer .
        </span>
      </small>

      <div className={styles.inputContainer}>
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
      </div>

      <small>
        <span>mot de passe oublier ?</span>
        <Link href={"/"}>
          <a>cliquez ici</a>
        </Link>
      </small>
      <button type="submit">connexion</button>
    </form>
  );
}

export default Login;
