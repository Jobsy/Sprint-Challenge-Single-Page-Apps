import React from "react";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";



export default function CharacterPage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Character Page!</h1>
        <SearchForm />
        <CharacterList />
      </header>
    </section>
  );
}
