import React from "react";
import Link from "next/link";
import { Arrow, Fav } from "../../svg/svg";
import PokeCss from "../../../styles/Poke.module.css";
import HomeCss from "../../../styles/Home.module.css";
import { Type1 } from "../Type/Type";
import { ImgPoke1 } from "../ImgPoke/ImgPoke";

export const LinkPoke = () => {
  return (
    <div className={PokeCss.navegacion}>
      <Link
        scroll={false}
        href={{
          pathname: "/",
          as: "/",
        }}
      >
        <a>
          <Arrow />
        </a>
      </Link>

      <Fav />
    </div>
  );
};


export const LinkPoke1 = (pokemon) => {
  return (
    <Link
    scroll={false}
    href={{
      pathname: "/pokemon/[name]",
      query: { name: pokemon.name },
    }}
  >
    <a>
      <div
        className={`${HomeCss.card} ${pokemon.types[0].type.name}`}
      >
        <Type1  {...pokemon}/>
        <ImgPoke1 {...pokemon}/>
      </div>
    </a>
  </Link>
  )
}


 
