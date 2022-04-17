import React from "react";
import { Icon } from "@iconify/react";

function SearchSection() {
  return (
    <div data-target="search">
      <div data-target="input">
        <input type="text" placeholder="nom, prenom, ID" />
        <Icon icon="eva:search-outline" />
      </div>

      <select>
        <option value="val">niveau d'étude</option>
      </select>

      <select>
        <option value="val">année d'étude</option>
      </select>
    </div>
  );
}

export default SearchSection;
