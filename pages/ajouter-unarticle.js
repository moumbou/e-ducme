import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import style from "../css/Article.Style.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pushMessage } from "../slices/messageSlice";

function ajouterUnarticle() {
  const [picture, setPicture] = useState();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onchangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const isValid = ["image/jpeg", "image/png", "image/gif"].includes(
        file.type
      );

      if (isValid) {
        setPicture(URL.createObjectURL(file));
      } else {
        setPicture(null);
      }
    } else {
      setPicture(null);
    }
  };

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
    const dataForm = new FormData();

    if (data.article === "null" && !data.add_article)
      return dispatch(
        pushMessage({
          err: true,
          message: `vous devez choisir le type d'article sinon ajoutez en un !`,
        })
      );

    if (picture) {
      dataForm.append("file", data.picture[0]);
    } else {
      return dispatch(
        pushMessage({
          err: true,
          message: `il faut ajouter une image a votre article !`,
        })
      );
    }
    dataForm.append(
      "data",
      JSON.stringify({
        titre: data.titre,
        article: data.article,
        add_article: data.add_article,
        description: data.description,
      })
    );
    axios
      .post("/api/add-article", dataForm, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(({ data }) => {
        dispatch(pushMessage(data));
        reset();
        setPicture(null);
      })
      .catch((res) => {
        const message = res.response.data;
        dispatch(pushMessage(message));
      });
  };

  return (
    <MainContainer>
      <div className={style.container}>
        <h3>ajouter un article</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            data-target="image-container"
            onClick={() => document.getElementById("picture-article").click()}
            style={{
              backgroundImage: `url(${
                picture ? picture : "./site-img/article.jpg"
              })`,
            }}
          >
            <input
              type="file"
              id="picture-article"
              {...register("picture", {
                onChange: (e) => onchangeHandler(e),
              })}
            />
          </div>

          <div data-target="input-container">
            <div data-target="input-wrapper">
              <input
                type="text"
                placeholder="Titre"
                {...register("titre", {
                  required: true,
                })}
              />
              {errors.titre ? (
                <span data-target="span-error">le titre est obligatoire</span>
              ) : (
                <></>
              )}
            </div>
            <select {...register("article")}>
              <option value="null">aucun article n'existe</option>
            </select>
            <input
              type="text"
              placeholder="ajouter une catégorie d'article"
              {...register("add_article")}
            />
          </div>
          <div data-target="input-wrapper">
            <textarea
              cols="30"
              rows="10"
              placeholder="Description"
              {...register("description", {
                required: true,
                minLength: 255,
              })}
            ></textarea>
            {errors.description ? (
              errors.description.type === "required" ? (
                <span data-target="span-error">
                  la description est obligatoire !
                </span>
              ) : (
                <span data-target="span-error">
                  la description doit contenir en moins 255 charactere !
                </span>
              )
            ) : (
              <></>
            )}
          </div>
          <button type="submit">ajouter</button>
        </form>
      </div>
    </MainContainer>
  );
}

export default ajouterUnarticle;
