import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(res => {
      console.log("rrrr: ", res)
      console.log("ddd: ", res.data)
      setCharacter(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
console.log("cccc: ", character)
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
