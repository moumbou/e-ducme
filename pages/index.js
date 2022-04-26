import Nav from "../components/Nav";
import styles from "../css/HomePageStyle.module.css";
const Index = () => {
  return (
    <div className={styles.hero}>
      <img src="images/triangle-top.png" className={styles.triangle1} />
      <img src="images/triangle-left.png" className={styles.triangle2} />
      <img src="images/circle.png" className={styles.circle} />

      <Nav target={"home"} />
      <dev className={styles.row}>
        {" "}
        {/* et la j'ai appeler un objet ou une classe */}
        <div className="col-1">
          <img src="images/man.png" />
          <img src="images/elements.png" className={styles.elements} />
        </div>
        <div className={styles.col_2}>
          <h1>
            Pour Chaque <span>étudiant</span> , chaque enseigant <br /> des
            résultat réél
          </h1>
          <p>
            Nous sommes une organisation à but non lucratif ayant pour mission
            de fournir un enseignement gratuit et de qualité, pour tout le
            monde, partout
          </p>
        </div>
      </dev>
    </div>
  );
};

/* Retrieves pet(s) data from mongodb database */

export default Index;
