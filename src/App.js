import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { useDispatch } from "react-redux";
import { removeCharacter } from "./redux/actions";

function App() {
  //Definimos el hook useDispatch para eliminar una carta de los fav
  // cuando se elimina desde el home
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //Definimos un array vacio para el estado inicial
  const [character, setCharacters] = useState([]);

  //Funcion que busca y devuelve personajes de la API
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (character.length < 1) {
            return setCharacters((oldChars) => [...oldChars, data]);
          }
          // Recorremos cada personaje en nuestro estado char
          // Si los ids coinciden retornamos repetido
          // Para evitar que se vuelva a agregar el mismo personaje
          for (const char of character) {
            if (char.id.toString(10) === id) {
              return console.log("repetido");
            }
          }
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  //Funcion que devuelve un numero random entre dos numeros
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
  }

  //Llamamos a la función OnSearch y le pasamos como parametro un id random
  //De esta forma generamos una carta random
  const randomCharacter = () => {
    onSearch(getRandomIntInclusive(1, 826));
  };

  //Función que elimina Cards al hacer click en la x (close)
  const onClose = (props) => {
    const closeCard = character.filter(
      (mycharacter) => mycharacter.id !== props.id,
    );
    setCharacters(closeCard);
    dispatch(removeCharacter(props.id));
  };

  //Un estado local llamado "access" que se inicializa en false.
  // Evita que alguien no logueado ingrese a nuestra web

  const [access, setAccess] = useState(false);
  const username = "example@gmail.com";
  const password = "123456rick";

  //Funcion LOGIN
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  //FUNCION LOGOUT
  function logout() {
    setAccess(false);
    navigate("/");
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <>
          <Nav
            username={username}
            randomCharacter={randomCharacter}
            logout={logout}
            onSearch={onSearch}
          />
        </>
      )}

      <div>
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <>
                <div>
                  <SearchBar onSearch={onSearch} />
                </div>

                <Cards
                  onClose={onClose}
                  id={character.id}
                  characters={character}
                />
              </>
            }
          />
          <Route
            exact
            path="/pagination"
            element={
              <Pagination
                onClose={onClose}
                id={character.id}
                characters={character}
                onSearch={onSearch}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Form login={login} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
