import React from "react";
import ItemList from "./ItemList";

function ContentSection() {
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div data-target="content">
      <ul>
        {test.map((val, i) => {
          return <ItemList key={i} />;
        })}
      </ul>
    </div>
  );
}

export default ContentSection;
