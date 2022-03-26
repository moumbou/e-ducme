import Nav from "../components/Nav";
import styles from "../css/HomePageStyle.module.css";
import Link from "next/link";

function about() {
  return (
    <div className={styles.hero}>
      <Nav target={"about"} />
      <div className={styles.aboutContent}>
        <p>
          <span>e-ducme</span> is Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur, quo ducimus. Labore placeat aliquid
          voluptates ullam assumenda, quis beatae voluptatem nihil numquam. Ad,
          eaque eligendi harum doloribus ab consectetur amet.
        </p>
      </div>
      <div>
        <Link href={"/"}>
          <a className={styles.link_btn} type="button">
            <span></span>Espace Etudiant
          </a>
        </Link>
        <Link href={'/'}>
          <a className={styles.link_btn} type="button">
            <span></span>Espace Enseigant
          </a>
        </Link>
      </div>
    </div>
  );
}

export default about;
