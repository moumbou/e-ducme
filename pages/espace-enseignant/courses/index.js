import React from "react";
import MainContainer from "../../../components/MainContainer";
import style from "../../../css/Courses.Style.module.css";
import SearchSection from "../../../components/enseignants/courses/SearchSection";
import CoursesContainer from "../../../components/enseignants/courses/CoursesContainer";

function courses() {
  return (
    <MainContainer>
      <div className={style.container}>
        <SearchSection style={style} />
        <CoursesContainer style={style} />
      </div>
    </MainContainer>
  );
}

export default courses;
