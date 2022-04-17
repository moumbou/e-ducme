import React from "react";
import { Icon } from "@iconify/react";

function CourseCard() {
  return (
    <div data-target="card">
      <div data-target="picture" />

      <div data-target="info">
        <h3>course name</h3>
        <p>details</p>
        <Icon icon="ant-design:plus-circle-filled" />
      </div>
    </div>
  );
}

export default CourseCard;
