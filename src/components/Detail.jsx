import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./css/Details.module.css";

const Detail = (props) => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  const Nav = useNavigate();
  const backToHome = () => {
    Nav("/home");
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <>
      <h1 className={styles.name}>{character.name}</h1>
      <div className={styles.container}>
        <div>
          <img
            className={styles.imgDetails}
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className={styles.info}>
          <h3>Status: {character.status}</h3>
          <h3>Specie: {character.species}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Origin: {character.origin?.name}</h3>
        </div>
      </div>
      <button className={styles.back} onClick={backToHome}>
        Back
      </button>
    </>
  );
};
export default Detail;
