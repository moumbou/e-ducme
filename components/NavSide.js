import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import navSideStyle from "../css/NavSideStyle.module.css";
import { Icon } from "@iconify/react";
import SideBarLink from "./SideBarLink";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function NavSide() {
  const user = useSelector(selectUser);
  const [currentUser, setUser] = useState();

  useEffect(() => {
    return () => {
      if (user) return setUser(user);
    };
  }, [user]);

  return (
    <div className={navSideStyle.style}>
      <ul target="list-item">
        <li>
          <SideBarLink
            href={`/espace-${
              user && user.role === "prof" ? "enseignant" : "etudiant"
            }/profile`}
            acitveClassName={"active"}
          >
            <a target="profile">
              <Avatar
                src={
                  currentUser && currentUser.picture
                    ? currentUser.picture
                    : "https://avatars.githubusercontent.com/u/60050570?v=4"
                }
                round={true}
                size="50"
                className="profile-pic"
              />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href={`/espace-${
              user && user.role === "prof" ? "enseignant" : "etudiant"
            }`}
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"ant-design:home-filled"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href={`/espace-${
              user && user.role === "prof" ? "enseignant" : "etudiant"
            }/chat`}
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"bi:chat-dots-fill"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href={`/espace-${
              user && user.role === "prof" ? "enseignant" : "etudiant"
            }/meeting`}
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"fluent:meet-now-16-filled"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href={`/espace-${
              user && user.role === "prof" ? "enseignant" : "etudiant"
            }/courses`}
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"icon-park-outline:bookshelf"} />
            </a>
          </SideBarLink>
        </li>
      </ul>
    </div>
  );
}

export default NavSide;
