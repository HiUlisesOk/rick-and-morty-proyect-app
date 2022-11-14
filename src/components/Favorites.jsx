import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import style from "./css/Cards.module.css";
import { orderCards, filterCards } from "../redux/actions";
class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.orderCards("Ascendente");
  }
  render() {
    const handleChange = (e) => {
      if (e.target.name === "order") {
        this.props.orderCards(e.target.value);
      }
      if (e.target.name === "filter") {
        this.props.filterCards(e.target.value);
      }
    };
    return (
      <>
        <div>
          <select onChange={handleChange} name="order">
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select onChange={handleChange} name="filter">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div className={style.CardsContainer}>
          {this.props.myFavorites.map((character, index) => {
            return (
              <Card
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                id={character.id}
                onClose={character.onClose}
                key={index}
              />
            );
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    filterCards: (e) => dispatch(filterCards(e)),
    orderCards: (e) => dispatch(orderCards(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Favorites);
