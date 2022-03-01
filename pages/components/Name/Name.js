import React from "react";
import PokeCss from "../../../styles/Poke.module.css";

export const Name = (data) => {
  return (
    <div className={PokeCss.nombre}>
      <h1>{data.name}</h1>
      <span>#00{data.id}</span>
    </div>
  );
};
