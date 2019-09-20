import React from "react";

export default function CharacterCard(props) {
  console.log(props.character)
  
  return <span>{props.character.name } <br /></span>;
}
