import React from "react";
import PokeCss from "../../../styles/Poke.module.css";
import HomeCss from "../../../styles/Home.module.css";

export const Type = (data) => {
  return (
    <div className={PokeCss.tipos}>
      {data.types.map((type, index) => (
        <div key={index} className={PokeCss.tipo}>
          <span>{type.type.name}</span>
        </div>
      ))}
    </div>
  );
};

export const Type1 = (pokemon) => {
  return (
    <div className={HomeCss.nombreTipos}>
    <h3 exit={{ opacity: 0 }}>{pokemon.name}</h3>
    <div className={HomeCss.tipos}>
    {pokemon.types.map((tipos, index) => {
      return (
        <div key={index} className={HomeCss.tipo}>
          {tipos.type.name}
        </div>
      );
    })}
  </div>
  </div>
  )
}
