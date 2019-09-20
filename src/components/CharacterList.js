import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState({ results: [] });

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setCharacter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <section className="character-list">
      <h2>List of Members/Fans</h2>
      {characters.results.map(character => (
        <ul>
          <li><CharacterCard character={character} /></li>
        </ul>
      ))}
    </section>
  );
}
