import MainContainer from "../../components/MainContainer";
import style from "../../css/Meeting.Style.module.css";
import { Icon } from "@iconify/react";

function meeting() {
  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.content}>
          <Icon icon="fluent:meet-now-16-filled" />
          <h3>bien venu dans le meeting section !</h3>

          <span>entrez votre code ici</span>
          <input type="text" placeholder="exp: #068435130" />
          <button>rejoindre le meeting</button>
        </div>
      </div>
    </MainContainer>
  );
}

export default meeting;
