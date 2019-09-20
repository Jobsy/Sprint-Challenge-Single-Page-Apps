import React, { useState, useEffect } from "react";
import axios from 'axios';
import { InputStyle } from "./style";



export default function SearchForm() {

  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/?name=" + query)
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    };
    fetchData();
  }, [query]);

  return (
    <section className="search-form">
      <h3>Search tthrough Character Page</h3>
      <InputStyle type="text" onChange={e => setQuery(e.target.value)} />
      <br />
      {data.results.map(data2 => (
        <ul>
          <li><span>{data2.name}</span></li>
        </ul>
      ))}
    </section>
  );
}
