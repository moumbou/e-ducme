import React from "react";
import Avatar from "react-avatar";
import navSideStyle from "../css/NavSideStyle.module.css";
import { Icon } from "@iconify/react";
import SideBarLink from "./SideBarLink";

function NavSide() {
  return (
    <div className={navSideStyle.style}>
      <ul target="list-item">
        <li>
          <SideBarLink href="/espace-enseignant/profile" acitveClassName={"active"}>
            <a target="profile">
              <Avatar
                src="https://avatars.githubusercontent.com/u/60050570?v=4"
                round={true}
                size="50"
                className="profile-pic"
              />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink href="/espace-enseignant" acitveClassName={"active"}>
            <a>
              <Icon fontSize={32} icon={"ant-design:home-filled"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href="/espace-enseignant/chat"
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"bi:chat-dots-fill"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href="/espace-enseignant/meeting"
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"fluent:meet-now-16-filled"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href="/espace-enseignant/courses"
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"icon-park-outline:bookshelf"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href="/espace-enseignant/etudiants"
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"ph:student-fill"} />
            </a>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink
            href="/espace-enseignant/deconnexion"
            acitveClassName={"active"}
          >
            <a>
              <Icon fontSize={32} icon={"ant-design:logout-outlined"} />
            </a>
          </SideBarLink>
        </li>
      </ul>
    </div>
  );
}

export default NavSide;
