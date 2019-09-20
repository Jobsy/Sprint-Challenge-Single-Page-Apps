import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
 
  const [data, setData] = useState({ results: []});
  const [query, setQuery] = useState("");


  useEffect(() => {
    
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
  }, [query]);
console.log("cccc22222: ", data)

  return (
    <section className="search-form">
     // Add a search form here
    <input type="text"  onChange={e => setQuery(e.target.value)}/>
     
    </section>
  );
}
