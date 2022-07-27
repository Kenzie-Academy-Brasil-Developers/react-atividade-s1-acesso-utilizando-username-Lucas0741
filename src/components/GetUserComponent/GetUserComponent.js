import { useState } from "react";
import "./GetUserComponent.css";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function handleLogin() {
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <article className="formulario">
      <form
        className="formulario--container"
        onSubmit={(event) => {
          handleLogin(event.preventDefault());
        }}
      >
        <input
          className="formulario--nome"
          type="text"
          placeholder="Insira seu nome"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button className="formulario--login" type="submit">
          Logar!
        </button>
      </form>
    </article>
  );
}

export default GetUserComponent;
