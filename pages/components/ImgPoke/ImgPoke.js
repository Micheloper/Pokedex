import React from 'react'
import PokeCss from "../../../styles/Poke.module.css";
import HomeCss from "../../../styles/Home.module.css";

export const ImgPoke = (data) => {
  return (
    <div>
    <img
      src={data.sprites.other.dream_world.front_default}
      alt={data.name}
      className={PokeCss.imagen}
      width="200"
      height="200"
    />
  </div>
  )
}


export const ImgPoke1 = (pokemon) => {
  return (
    <img
    src={pokemon.sprites}
    alt={pokemon.name}
    width={100}
    height={100}
    className={HomeCss.imagen}
  />
  )
}
