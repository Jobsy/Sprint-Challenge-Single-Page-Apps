import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
// import CharacterList from "./components/CharacterList";
import CharacterPage from "./components/CharacterPage";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    
    // <main>
    //   <Header />
    //   <CharacterList />
    // </main>
    <>
    <ul>
      <li>
        <Link to="/home">Home Page</Link>
      </li>
      <li>
        <Link to="/character">Character Page</Link>
      </li>
    </ul>

    <Route path="/home" component={WelcomePage} />
    <Route path="/character" component={CharacterPage} />
    </>
  );
}
