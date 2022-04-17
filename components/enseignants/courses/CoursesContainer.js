import React from "react";
import CourseCard from "./CourseCard";

function CoursesContainer({ style }) {
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1];

  return (
    <div className={style.content}>
      {test.map((val, i) => {
        return <CourseCard key={i} />;
      })}
    </div>
  );
}

export default CoursesContainer;
