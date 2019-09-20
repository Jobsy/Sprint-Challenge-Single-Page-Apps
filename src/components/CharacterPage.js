import React from "react";
import CharacterList from "./CharacterList";



export default function CharacterPage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Character Page!</h1>
        <CharacterList />
      </header>
    </section>
  );
}
