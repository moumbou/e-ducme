import React from "react";

function CardArticle() {
  const lorem = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
    delectus consequatur commodi doloremque deleniti dolorum ipsa,
    voluptatem nesciunt consectetur cumque, ad possimus illo
    architecto rem mollitia quos accusantium vel omnis.`;

  return (
    <div target="card">
      <img src="/site-img/research-img.jpg" alt="research-img" />
      <div target="content">
        <h4>titre</h4>
        <p>{lorem.length > 180 ? `${lorem.substring(0, 180)}...` : lorem}</p>
        <a href="#">voir l'article</a>
      </div>
    </div>
  );
}

export default CardArticle;
