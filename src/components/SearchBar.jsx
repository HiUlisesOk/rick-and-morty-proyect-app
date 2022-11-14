import { useState } from "react";
import styles from "./css/SearchBar.module.css";
export default function SearchBar(props) {
  const [id, setId] = useState("");
  const clickHandler = () => {
    props.onSearch(id);
  };
  return (
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
  );
}
