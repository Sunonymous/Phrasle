import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { isEmptyWord, makeStartingGuesses } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from "../GuessInput";
import GuessList from '../GuessList';
import Banner from '../Banner';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
const answer = 'ANAHATA';

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses,     setGuesses] = React.useState(makeStartingGuesses(answer.length + 1, answer.length));
  const [nextGuess, setNextGuess] = React.useState('');
  const [status,       setStatus] = React.useState('playing');
  // Keep the status set to 'playing', 'won', or 'lost'.

  const hasWinningGuess = guesses.findIndex((guess) => guess === answer) !== -1;
  const      guessCount = guesses.filter((guess) => !isEmptyWord(guess)).length;

  if (status === 'playing') {
    if (!isEmptyWord(guesses[guesses.length - 1])) setStatus("lost");
  }

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    if (guesses.includes(nextGuess)) {
      alert("You've already guessed that word. I'm looking out for you.");
      return;
    } else if (nextGuess === answer) {
      setStatus('won');
    }

    const indexToReplace = guesses.findIndex(isEmptyWord);
    const newGuesses = [...guesses];
    newGuesses[indexToReplace] = nextGuess;
    console.log(`Guessed ${nextGuess}`);

    setGuesses(newGuesses);
    setNextGuess('');
  }

  return (
    <>
      {status !== "playing" && <Banner status={status} answer={answer} guessCount={guessCount}/>}
      <GuessList answer={answer} guesses={guesses} />
      <GuessInput
        status={status}
        answer={answer}
        nextGuess={nextGuess}
        setNextGuess={setNextGuess}
        submitFunc={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
