import React from "react";
import Header from "./Header";
import NavSide from "./NavSide";
import mainContainerStyle from "../css/MainContainerStyle.module.css";

function MainContainer({ children }) {
  return (
    <div className={mainContainerStyle.style}>
      <Header />
      <div target="container">
        <NavSide />
        <div className={mainContainerStyle.contentContainer}>{children}</div>
      </div>
    </div>
  );
}

export default MainContainer;
