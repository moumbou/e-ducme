import React, { useEffect, useState } from "react";
import style from "../../../css/Enseignant.home.module.css";
import CardArticle from "./CardArticle";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

function ArticleListe({ articleTitle, articles }) {
  const [displayRight, setDisplayRight] = useState(Boolean);
  const [slideRight, setSlideRight] = useState(0);

  useEffect(() => {
    const slider = document.getElementById(`${articleTitle}-slider`);
    const slide = document.getElementById(`${articleTitle}-slide`);

    let sliderWidth = slider.offsetWidth;
    let slideWidth = slide.offsetWidth - slideRight;

    if (sliderWidth > slideWidth) setDisplayRight(false);
    else setDisplayRight(true);

    window.addEventListener("resize", () => {
      sliderWidth = slider.offsetWidth;
      slideWidth = slide.offsetWidth - slideRight;

      if (sliderWidth > slideWidth) setDisplayRight(false);
      else setDisplayRight(true);
    });
  }, [slideRight]);

  const slideRightHandler = () => {
    setSlideRight((prev) => prev + 420);
  };

  const slideLeftHandler = () => {
    setSlideRight((prev) => prev - 420);
  };

  return (
    <div className={style.articles}>
      <h2>
        <span>article</span> {articleTitle}
      </h2>
      <div target="full-width">
        <AiFillRightCircle
          className={style.iconCardsContainer}
          target="right"
          display={`${displayRight ? "true" : "false"}`}
          onClick={slideRightHandler}
        />

        <AiFillLeftCircle
          className={style.iconCardsContainer}
          target="left"
          display={`${slideRight ? "true" : "false"}`}
          onClick={slideLeftHandler}
        />
        <div id={`${articleTitle}-slider`} className={style.cardsContainer}>
          <div
            id={`${articleTitle}-slide`}
            target="slide"
            style={{ transform: `translateX(-${slideRight}px)` }}
          >
            {articles.map((value, i) => {
              return <CardArticle key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleListe;
