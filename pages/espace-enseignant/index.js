import React from "react";
import ArticleListe from "../../components/enseignants/index/ArticleListe";
import FirstSection from "../../components/enseignants/index/FirstSection";
import MainContainer from "../../components/MainContainer";
import style from "../../css/Enseignant.home.module.css";

function index() {

  const test0 = [1,1,1,1,1,1,1,1,1]
  const test1 = [1,1,1]
  const test2 = [1,1]

  return (
    <MainContainer>
      <FirstSection />

      <ArticleListe articleTitle={'techno'} articles={test0} />
      <ArticleListe articleTitle={'info'} articles={test1} />
      <ArticleListe articleTitle={'géo'} articles={test2} />
    </MainContainer>
  );
}

export default index;
