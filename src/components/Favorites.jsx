import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import style from "./css/Cards.module.css";
import { orderCards, filterCards, filterAndOrder } from "../redux/actions";
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: false, order: false, filterType: "", orderType: "" };
  }

  componentDidMount() {
    this.props.orderCards("Ascendente");
  }
  render() {
    const handleChange = (e) => {
      if (e.target.name === "order") {
        this.state.order = true;
        this.state.orderType = e.target.value;
        if (this.state.filter) {
          this.props.filterAndOrder(
            this.state.orderType,
            this.state.filterType,
          );
        } else {
          this.props.orderCards(e.target.value);
        }
      }
      if (e.target.name === "filter") {
        this.state.filter = true;
        this.state.filterType = e.target.value;
        if (this.state.order) {
          this.props.filterAndOrder(
            this.state.orderType,
            this.state.filterType,
          );
        } else {
          this.props.filterCards(e.target.value);
        }
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
    filterCards: (gender) => dispatch(filterCards(gender)),
    orderCards: (id) => dispatch(orderCards(id)),
    filterAndOrder: (id, gender) => dispatch(filterAndOrder(id, gender)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Favorites);
