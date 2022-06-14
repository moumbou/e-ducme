import Nav from "../components/Nav";
import styles from "../css/HomePageStyle.module.css";
const Index = () => {
  return (
    <div className={styles.hero}>
      <Nav target={"home"} />
      <div data-target="content">
        <div data-target="description">
          <h1>
            Découvrez une <br />
            <span data-color="yellow">Nouvelle façon d'apprendre</span>
          </h1>
          <p>
            EducMe accompagne les étudiants dans le suivi de leurs cours et aide
            les enseignants a mieux communiquer avec leurs bon èlèves
          </p>
        </div>

        <div data-target="pictures">
          <img data-target="front" src="/site-img/boy-storke.png" alt="boy" />
          <img data-target="back" src="/site-img/Vector1.png" alt="" />
          <img data-target="back" src="/site-img/Vector2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

/* Retrieves pet(s) data from mongodb database */

export default Index;
