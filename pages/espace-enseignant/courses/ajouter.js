import React from "react";
import MainContainer from "../../../components/MainContainer";
import style from "../../../css/Courses.Style.module.css";
import { Icon } from "@iconify/react";

function ajouter() {
  return (
    <MainContainer>
      <div className={style.addCoursContainer}>
        <h3>ajouter un cours</h3>
        <input type="text" placeholder="nom du cours" />
        <textarea
          cols="30"
          rows="10"
          placeholder="ajouter une description a votre cours"
        ></textarea>
        <div data-target="add-folder">
          <button type="button">ajouter un fichier a votre cours</button>
          <div data-target="documents-container">
            <div data-target="document">
              <div>
                <span>nom du fichier</span>
                <span>fichier PDF / 12MB</span>
              </div>
              <Icon data-target="icon-delete" icon={"ant-design:delete-row-outlined"} />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default ajouter;
