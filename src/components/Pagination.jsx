import React, { useEffect } from "react";
import style from "./css/Cards.module.css";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { getCharacter } from "../redux/actions";
const Pagination = (props) => {
  const paginationCards = useSelector((state) => state.paginationCards);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCharacter(props));
  }, []);
  console.log(paginationCards);

  return (
    <div className={style.CardsContainer}>
      {paginationCards.map((character, index) => {
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
  );
};

export default Pagination;
