import style from "./css/Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addCharacter, removeCharacter } from "../redux/actions";

function Card(props) {
  const clickHandler = (e) => {
    props.onClose(props);
  };

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      props.deleteFavorite(props.id);
      setIsFav(false);
    }
    if (isFav === false) {
      setIsFav(true);
      props.addFavorite(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  return (
    <div className={style.mycard}>
      <div>
        <div className={style.CardImg}>
          <img src={props.image} alt={props.name} />
        </div>
      </div>
      <div className={`${style.Titles} ${style.name}`}>{props.name}</div>

      <div className={style.container}>
        <div className={`${style.Titles} ${style.species}`}>Id: {props.id}</div>
        <div className={`${style.Titles}Especie: ${style.species}`}>
          {props.species}
        </div>
        <div className={`${style.Titles} ${style.gender}`}>
          Género: {props.gender}
        </div>
        <Link className={style.detail} to={`/detail/${props.id}`}>
          Detail
        </Link>

        <div className={style.isFav}>
          <button
            className={style.CloseBtn}
            id={props.id}
            onClick={clickHandler}
          >
            ❌
          </button>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (props) => {
      dispatch(addCharacter(props));
    },
    deleteFavorite: (props) => {
      dispatch(removeCharacter(props));
    },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
