import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../css/Admin.Style.module.css";
import { selectUser, setUser } from "../../slices/userSlice";
import { useRouter } from "next/router";
import axios from "axios";
import { pushMessage } from "../../slices/messageSlice";
import UserItem from "../../components/admin/userItem";

function index() {
  const [users, setUsers] = useState([]);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  let token = null;

  const getUsers = (token) => {
    axios
      .get("/api/get-users", {
        headers: {
          "x-access-token": token,
        },
      })
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((response) => {
        console.log(response);
        dispatch(
          pushMessage({
            err: true,
            message: `une erreur c'est produite veillez rafraichir la page`,
          })
        );
      });
  };

  useEffect(() => {
    token = localStorage.getItem("token");
    if (user) {
      if (!user.role.includes("admin")) router.push("/");
    } else {
      if (!token) {
        router.push("/");
        getUsers(token);
      } else
        axios
          .get("/api/get-user", {
            headers: {
              "x-access-token": token,
            },
          })
          .then(({ data }) => {
            dispatch(setUser(data.user));
            getUsers(token);
          })
          .catch(() => {
            router.push("/");
          });
    }
  }, [user, token]);

  return (
    <div className={style.container}>
      <ul>
        {users.map((value, i) => {
          return <UserItem value={value} key={value._id} />;
        })}
      </ul>
    </div>
  );
}

export default index;
