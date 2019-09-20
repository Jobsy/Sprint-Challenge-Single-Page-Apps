import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";


export default function CharacterPage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Character Page!</h1>
        <Link to="/search">Search</Link>
        <Route exact path="/search" component={SearchForm} />
        <CharacterList />
      </header>
    </section>
  );
}
