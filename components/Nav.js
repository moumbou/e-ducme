import styles from "../css/HomePageStyle.module.css";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa"
import { WiMoonAltNew } from "react-icons/wi"

function Nav({ target }) {
  return (
    <div className={styles.nav}>
      <div data-target="logo">
        <h2>EducMe</h2>

        <span>
          <FaRegMoon />
          <WiMoonAltNew />
        </span>
      </div>

      <div data-target="links">
        <ul>
          <li active={target === "home" ? "true" : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li active={target === "about" ? "true" : ""}>
            <Link href="/about">
              <a>Services</a>
            </Link>
          </li>
          <li active={target === "about" ? "true" : ""}>
            <Link href="/about">
              <a>Nous</a>
            </Link>
          </li>
        </ul>
        <Link href={"/connexion"}>
          <a className={styles.link_btn}>
            <span></span>Se connecter
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
