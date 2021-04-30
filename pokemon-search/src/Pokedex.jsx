import React, { Component } from "react";
import PokeCard from "./PokeCard";

class Pokedex extends Component {
  state = {
    pokemons: [],
    pokemonDetails: [],
    offset: 0,
    loadNumber: 24,
  };

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    const url =
      "https://pokeapi.co/api/v2/pokemon?offset=" +
      this.state.offset +
      "&limit=" +
      this.state.loadNumber;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data.results);
          this.setState({ pokemons: data.results }, () => {
            this.state.pokemons.map((pokemon) => {
              fetch(pokemon.url)
                .then((response) => response.json())
                .then((data) => {
                  if (data) {
                    var temp = this.state.pokemonDetails;
                    temp.push(data);
                    this.setState({ pokemonDetails: temp });
                  }
                })
                .catch(console.log);
            });
          });
        }
      })
      .catch(console.log);
  }
  getNextOffset() {
    return this.state.offset + this.state.loadNumber;
  }

  handleMoreClick() {
    const newOffset = this.getNextOffset();
    this.setState({ offset: newOffset }, () => {
      console.log("Offset: " + this.state.offset);
      this.getMorePokemon();
    });
  }
  render() {
    const { pokemonDetails } = this.state;
    const renderedList = pokemonDetails.map((pokemon, index) => {
      return <PokeCard pokemon={pokemon} key={pokemon.id} />;
    });
    return (
      <div className="card-container">
        {renderedList}
        <button
          type="button"
          className=""
          key="more-button"
          id="more-button"
          onClick={this.handleMoreClick}>
          Load More
        </button>
      </div>
    );
  }
}

export default Pokedex;
