import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import LocationCard from "./components/LocationCard";
import CharacterPage from "./components/CharacterPage";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/home">Home Page</Link>
        </li>
        <li>
          <Link to="/character">Character Page</Link>
        </li>
      </ul>

      <Route path="/home" component={WelcomePage} />
      <Route exact path="/character" component={CharacterPage} />
      <Route exact path="/search" component={SearchForm} />
    </>
  );
}
