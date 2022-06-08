import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleListe from "../../components/enseignants/index/ArticleListe";
import FirstSection from "../../components/enseignants/index/FirstSection";
import MainContainer from "../../components/MainContainer";

function index() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/get-articles", {
        headers: {
          "x-access-token": token,
        },
      })
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <MainContainer>
      <FirstSection />

      {articles.map((value) => {
        if (!value.articles.length) return <></>;
        return (
          <ArticleListe
            key={value._id}
            articleTitle={value.type}
            articles={value.articles}
          />
        );
      })}
    </MainContainer>
  );
}

export default index;
