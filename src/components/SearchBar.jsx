import { useState } from "react";
import styles from "./css/SearchBar.module.css";
import { useEffect } from "react";
export default function SearchBar(props) {
  let [infoText, setInfoText] = useState(`Busca el ID de tu personaje aquí`);
  let infoTextArray = [
    `Haz click en RANDOM para
  generar un personaje al azar`,
    `Añade personajes a favoritos haciendo click en los 🤍 de las cartas`,
    `Puedes ver todos los personajes de la serie en la pestaña TODOS LOS PERSONAJES`,
    `Si quieres saber un poco mas sobre este proyecto, puedes hacer click en ABOUT`,
    `Busca el ID de tu personaje aquí`,
  ];
  let [id, setId] = useState("");

  const clickHandler = () => {
    props.onSearch(id);
  };
  let handleChangeText = (i) => {
    setInfoText(infoTextArray[i]);
  };
  //Funcion que devuelve un numero random entre dos numeros
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
  }

  useEffect(() => {
    setTimeout(() => {
      handleChangeText(getRandomIntInclusive(0, 4));
    }, "5000");
  }, [infoText]);

  return (
    <>
      <p>{infoText}</p>
      <div className={styles.contSearch}>
        <input
          className={styles.myBar}
          type="search"
          onChange={(e) => setId(e.target.value)}
          id="search"
          placeholder="1 - 826"
          title="Escribe la id de tu personaje para buscarlo"
        />
        <div>
          <button className={styles.myButton} onClick={clickHandler}>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
}
