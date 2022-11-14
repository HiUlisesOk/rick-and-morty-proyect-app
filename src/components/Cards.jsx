import Card from "./Card";
import style from "./css/Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.CardsContainer}>
      {characters.map((character, index) => {
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
}
