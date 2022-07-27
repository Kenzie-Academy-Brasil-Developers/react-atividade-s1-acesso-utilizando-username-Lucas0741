import "./WelcomePage.css";

function WelcomePage({ user, setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <article className="logado">
      <h2 className="logado--user">Seja Bem-Vindo, {user}!</h2>
      <button className="logout" onClick={() => handleLogout()}>
        Logout
      </button>
    </article>
  );
}

export default WelcomePage;
