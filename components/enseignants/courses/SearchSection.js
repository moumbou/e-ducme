import React from "react";
import { Icon } from "@iconify/react";

function SearchSection({ style }) {
  return (
    <div className={style.searchSection}>
      <div data-target="input">
        <input type="text" placeholder="recherche" />
        <Icon icon="eva:search-outline" />
      </div>

      <button type="button">
        ajouter un cours <Icon icon="ant-design:file-add-filled" />
      </button>
    </div>
  );
}

export default SearchSection;
