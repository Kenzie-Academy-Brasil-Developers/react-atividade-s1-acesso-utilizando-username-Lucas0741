import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import GetUserComponent from "./components/GetUserComponent/GetUserComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">S1-27</header>
      <main>
        <section className="container">
          {isLoggedIn ? (
            <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
