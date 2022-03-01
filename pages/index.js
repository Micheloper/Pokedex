import { useState } from "react";
import HomeCss from "../styles/Home.module.css";
import { Button, Button1 } from "./components/Button/Button";
import { LinkPoke1 } from "./components/LinkPoke/LinkPoke";

export default function Home({ pokemones, minimimosDatos, tipos, notFound }) {
  const [filtro, setFiltrar] = useState(minimimosDatos);
  const filtrar = (elTipo) => {
    setFiltrar(minimimosDatos);

    if (elTipo === "borrar") {
      setFiltrar(minimimosDatos);
    } else {
      let filtradoPorTypo = minimimosDatos
        .filter((pokemon) =>
          pokemon.types.some((tipo) => tipo.type.name === elTipo)
        )
        .map((tem2) => {
          let nuevosTem = { ...tem2 };

          return nuevosTem;
        });
      setFiltrar(filtradoPorTypo);
    }
  };

  return (
    <>
      <div className={HomeCss.container}>
        <div className={HomeCss.filtros}>
          {Button(filtrar)}
          <div className={HomeCss.botones}>
            {tipos.map((tipo, index) => {
              return Button1(tipo, filtrar);
            })}
          </div>
        </div>

        <h1 className={HomeCss.titulo}>Pokemones</h1>

        <div className={HomeCss.columnas}>
          <ul>
            {filtro
              ? filtro.map((pokemon) => (
                  <li key={pokemon.id}>
                    <LinkPoke1 {...pokemon} />
                  </li>
                ))
              : "Cargando..."}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const resTipos = await fetch("https://pokeapi.co/api/v2/type");
  const tipos = await resTipos.json();

  const traemosPokemones = async (porPokemon) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${porPokemon}?limit=101&offset=0/`
    );
    const data = await response.json();

    return data;
  };
  let pokemones = [];
  for (let i = 1; i <= 151; i++) {
    let data = await traemosPokemones(i);
    pokemones.push(data);
  }

  let minimimosDatos = pokemones.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });

  return {
    props: {
      tipos: tipos.results,
      minimimosDatos,
    },
  };
}
