const validations = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[0-9])(?=.{6,10})/;
  const errors = {};
  if (!userData.username) {
    errors.username = "Este campo no puede estar vacío";
  } else if (!regexEmail.test(userData.username)) {
    errors.email = "Debe ser un correo electrónico";
  } else if (userData.username.length > 35) {
    errors.email = "Tu nombre de usuario debe ser mas corto";
  }

  if (!userData.password) {
    errors.password = "Este campo no puede estar vacío";
  } else if (!regexPassword.test(userData.password)) {
    errors.password =
      "La contraseña tiene que tener al menos un número y tener una longitud entre 6 y 10 caracteres";
  }
  return errors;
};

export default validations;
