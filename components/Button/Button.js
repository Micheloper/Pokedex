import HomeCss from "../../styles/Home.module.css";

export const Button = (filtrar) => {
  return (
    <button
      className={`${HomeCss.botonFiltro} ${HomeCss.botonTodos}`}
      onClick={() => filtrar("borrar")}
    >
      Mostrar todos
    </button>
  );
};

export const Button1 = (tipo, filtrar) => {
  return (
    <button
      key={tipo.name}
      className={`${HomeCss.botonFiltro} ${tipo.name}`}
      aria-label={tipo.name}
      onClick={() => filtrar(tipo.name)}
    >
      {tipo.name}
    </button>
  );
};
