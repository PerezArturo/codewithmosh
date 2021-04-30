import React from "react";

const PokerCard = ({ pokemon }) => {
  return (
    <div className="card" style={{ maxWidth: "18rem" }} key={pokemon.id}>
      <div className="card--title">
        <b>{pokemon.name}</b>
      </div>
      <div className="">
        <b>id: {pokemon.id}</b>
      </div>
      <div className="">
        <b>Height: {pokemon.height}</b>
      </div>
      <div className="">
        <b>Weight: {pokemon.weight}</b>
      </div>
      <img src={pokemon.sprites["front_default"]} />
      <img src={pokemon.sprites["back_default"]} />
    </div>
  );
};

export default PokerCard;
