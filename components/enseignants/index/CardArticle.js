import React from "react";

function CardArticle({ titre, description, picture }) {
  return (
    <div target="card">
      <img src={picture.substring(8, picture.length)} alt={titre} />
      <div target="content">
        <h4>{titre}</h4>
        <p>
          {description.length > 180
            ? `${description.substring(0, 180)}...`
            : description}
        </p>
        <a href="#">voir l'article</a>
      </div>
    </div>
  );
}

export default CardArticle;
