import styles from "../css/HomePageStyle.module.css";
import Link from "next/link";

function Nav({ target }) {
  return (
    <div className={styles.nav}>
      <img src="images/logo.jpg" className={styles.logo} />

      <ul>
        <li active={target === "home" ? "true" : ""}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li active={target === "about" ? "true" : ""}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <Link href={"/connexion"}>
        <a className={styles.link_btn}>
          <span></span>Se connecter
        </a>
      </Link>
    </div>
  );
}

export default Nav;
