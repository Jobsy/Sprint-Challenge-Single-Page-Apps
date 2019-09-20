import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";

export default function SearchForm() {

  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");


  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/?name=" + query)
        .then(res => {
          console.log("rrrr2222: ", res)
          console.log("ddd2222: ", res.data)
          setData(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    };
    fetchData();
  }, [query]);
  console.log("cccc22222: ", data)
  console.log("cccc33333: ", data.results.name)

  return (
    <section className="search-form">
      <h1>Search the Character Page</h1>
      <input type="text" onChange={e => setQuery(e.target.value)} />
      {data.results.map(data2 => (
        <li><span>{data2.name}</span></li>
      ))}
    </section>
  );
}
