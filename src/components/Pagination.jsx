import React, { useEffect } from "react";
import style from "./css/Cards.module.css";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { getCharacter } from "../redux/actions";
import { useState } from "react";

const Pagination = (props) => {
  //Traemos nuestros personajes del estado global
  const paginationCards = useSelector((state) => state.paginationCards);

  //Inicializamos dispatch
  const dispatch = useDispatch();

  //Estado local de paginacion API, cada pagina trae 20 pjs de la API
  // No confundir con contador de paginas COMPONENTE
  const [currentPage, setCurrentPage] = useState(1);

  //ESTADO contador de paginas COMPONENTE
  //suma o resta cuando haces click a siguiente o prev
  const [contador, Setcontador] = useState(1);

  //Para actualizar los datos del estado paginacion API
  useEffect(() => {
    dispatch(getCharacter(currentPage));
  }, [currentPage]);

  // 20 cartas por pagina
  // solo mostramos 5
  const [cardsToShow, setCardsToShow] = useState({ start: 0, end: 5 });

  let currentPageCards = paginationCards.slice(
    cardsToShow.start,
    cardsToShow.end,
  );
  //HACEMOS CLICK EN SIGUIENTE
  const handleNext = (event) => {
    //Si no llegamos al final de la PAGINA API
    if (cardsToShow.end < 20) {
      //MOSTRAMOS 5 CARTAS MAS EN NUESTRO COMPONENTE
      setCardsToShow({
        start: cardsToShow.start + 5,
        end: cardsToShow.end + 5,
      });

      //ACTUALIZAMOS EL CONTADOR DE PAGINAS COMPONENTE
      Setcontador(contador + 1);
    } else {
      //Si llegamos al final de la pagina API
      // AVANZAMOS DE PAGINA API
      setCurrentPage(currentPage + 1);
      //Reseteamos nuestra pagina componente
      setCardsToShow({ start: 0, end: 5 });
      //ACTUALIZAMOS EL CONTADOR DE PAGINAS COMPONENTE
      Setcontador(contador + 1);
    }
  };

  //HACEMOS CLICK EN ATRÁS
  const handleBack = () => {
    if (contador <= 1) {
      return;
    }
    if (cardsToShow.start > 0) {
      setCardsToShow({
        start: cardsToShow.start - 5,
        end: cardsToShow.end - 5,
      });
      Setcontador(contador - 1);
    } else {
      setCurrentPage(currentPage - 1);
      setCardsToShow({ start: 15, end: 20 });
      Setcontador(contador - 1);
    }
  };

  return (
    <>
      <div className={style.CardsContainer}>
        {currentPageCards?.map((character, index) => {
          return (
            <Card
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              id={character.id}
              onClose={props.onClose}
              key={index}
            />
          );
        })}
      </div>
      <div className={style.PaginationContainer}>
        <button onClick={handleBack} className={style.PaginationBtn}>
          Atrás
        </button>

        <button className={style.PaginationNumBtn}>{contador}</button>
        <button onClick={handleNext} className={style.PaginationBtn}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Pagination;
