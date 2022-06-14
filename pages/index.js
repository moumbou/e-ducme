import Nav from "../components/Nav";
import styles from "../css/HomePageStyle.module.css";
import { SiGooglemeet } from "react-icons/si";
import { IoMdChatbubbles } from "react-icons/io";

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
          <img data-target="front" src="/site-img/boy.png" alt="boy" />
          <img data-target="back" src="/site-img/Vector1.png" alt="" />
          <img data-target="back" src="/site-img/Vector2.png" alt="" />

          <div data-target="float-card">
            <SiGooglemeet />
            <span>
              Simplifiez <br /> vos meeting
            </span>
          </div>

          <div data-target="float-card" data-position="bottom">
            <IoMdChatbubbles />
            <span>
              Communication <br /> facile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Retrieves pet(s) data from mongodb database */

export default Index;
