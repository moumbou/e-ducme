import Nav from "../components/Nav";
import styles from "../css/HomePageStyle.module.css";

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
        <button type="button">
          <span></span>Espace Etudiant
        </button>
        <button type="button">
          <span></span>Espace Enseigant
        </button>
      </div>
    </div>
  );
}

export default about;
