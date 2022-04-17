import React from "react";
import MainContainer from "../../components/MainContainer";
import style from "../../css/Etudiants.Style.module.css";
import { Icon } from "@iconify/react";
import SearchSection from "../../components/enseignants/etudiants/SearchSection";
import ContentSection from "../../components/enseignants/etudiants/ContentSection";

function etudiants() {
  return (
    <MainContainer>
      <div className={style.container}>
        <SearchSection />
        <ContentSection />
      </div>
    </MainContainer>
  );
}

export default etudiants;
