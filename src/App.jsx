import { useState } from 'react'
import './App.css'
import CardsDiv from './components/CardsDiv'
import Header from './components/Header'
import Pokemons from './components/data'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonList, setPokemonList] = useState(shuffleList(Pokemons));
  const [successfulChoiceCnt, setSuccessfulChoiceCnt] = useState(0);

  function shuffleList(list) {
      return list.sort(() => Math.random() - 0.5);
  }
  function handleClick(pokemonName) {
    const chosePokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
    if (!chosePokemon.isChosen) {
      setScore(score + 1);
      setSuccessfulChoiceCnt(successfulChoiceCnt + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      setPokemonList(shuffleList(pokemonList.map((pokemon) => (pokemon.name === pokemonName) ? {...pokemon, isChosen : true} : pokemon)));
    }
    else {
      setScore(0);
      setPokemonList(shuffleList(pokemonList));
    }
  }

  function handleRestartClick() {
    setPokemonList(shuffleList(pokemonList.map(pokemon => ({...pokemon, isChosen:false}))));
    setScore(0);
    setBestScore(0);
    setSuccessfulChoiceCnt(0);
  }

  if (successfulChoiceCnt === pokemonList.length) {
    return (
      <>
        <Header score={score} bestScore={bestScore} handleRestartClick={handleRestartClick}/>
        <h1>All Pokemon are chosen. Click "Restart" button to play again!</h1>
      </>
    );
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} handleRestartClick={handleRestartClick}/>
      <CardsDiv cardHandleClick={handleClick} characters={pokemonList}/>
    </>
  )
}

export default App
