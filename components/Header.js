import React, { useEffect } from "react";
import headerStyle from "../css/HeaderStyle.module.css";
import Avatar from "react-avatar";
import { FaBars } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../slices/userSlice";
import { useRouter } from "next/router";
import axios from "axios";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  let token = null;

  useEffect(() => {
    token = localStorage.getItem("token");
    if (!user && !token) router.push("/");
    if (!user && token) {
      axios
        .get("/api/get-user", {
          headers: {
            "x-access-token": token,
          },
        })
        .then(({ data }) => {
          const { user } = data;
          const path = router.pathname;
          const role = user.role;
          dispatch(setUser(user));
          console.log();
          if (role.includes("prof") && !path.includes("/espace-enseignant"))
            if (!path.includes("/ajouter-unarticle"))
              router.push("/espace-enseignant");
          if (role.includes("etudiant") && !path.includes("/espace-etudiant"))
            router.push("/espace-etudiant");
        })
        .catch((res) => {
          localStorage.setItem("token", "");
          router.push("/");
        });
    }
  }, [user, token]);

  return (
    <div className={headerStyle.style}>
      <div target="left-side">
        <FaBars />
      </div>

      <div target="right-side">
        <IoNotificationsSharp size={32} />
        <Avatar
          src={
            user && user.picture
              ? user.picture
              : "https://avatars.githubusercontent.com/u/60050570?v=4"
          }
          size="42"
          round={true}
        />
        <div target="user-profile-side">
          <span>{user ? user.nom : ""}</span>
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
