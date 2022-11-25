import React from "react";
import styles from "./css/Info.module.css";
import { useNavigate } from "react-router-dom";
import yo from "../images/me.jpg";
const About = (props) => {
  const Nav = useNavigate();
  const backToHome = () => {
    Nav("/home");
  };
  return (
    <>
      <p>About Me</p>

      <div className={styles.infoProyect}>
        <img className={styles.imgProyect} src={yo} />
        <div>
          Hola! Mi nombre es <b>Ulises Esquivel</b>, soy alumno de{" "}
          <a href="soyhenry.com">HENRY</a> y actualmente estoy cursando la
          carrera de <b>Desarrollador FullStack.</b>
          <hr></hr>Este proyecto forma parte de una Homework integradora del
          Modulo 2, fue desarrollada aplicando conocimientos de{" "}
          <b>Html, CSS, Javascript, React & Redux.</b>{" "}
        </div>
      </div>
      <div className={styles.info2Proyect}>
        Muchas gracias por pasar por aquí, si querés dejarme algún feedback para
        mejorar podés escribirme a mi{" "}
        <a href="https://www.linkedin.com/in/ulises-esquivel-981771229/">
          LinkedIn{" "}
        </a>
      </div>
    </>
  );
};
export default About;
