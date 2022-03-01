import React from "react";
import PokeCss from "../../styles/Poke.module.css";
import { Name } from "../../components/Name/Name";
import { Type } from "../../components/Type/Type";
import { ImgPoke } from "../../components/ImgPoke/ImgPoke";
import { LinkPoke } from "../../components/LinkPoke/LinkPoke";

export default function Pokemon({ data }) {
  return (
    <>
      <div className={PokeCss.contenedor}>
        <div className={`${PokeCss.Info} ${data.types[0].type.name}`}>
          <LinkPoke />
          <Name {...data} />;
          <Type {...data} />
          <ImgPoke {...data} />
        </div>
        <div className={PokeCss.masInfo}>
          <h1>HOAL</h1>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.params;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
