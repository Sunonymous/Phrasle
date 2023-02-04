import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessList({ answer, guesses }) {
  const judgement = checkGuess.bind(null, answer);
  
  const resultToCell = ({letter, status }, idx) => {
    const className = letter === ' ' ? 'cell' : `cell ${status}`;
    return <span key={idx} className={className}>{letter}</span>;
  }
  const guessToResult = (guess, idx) => {
    const results = judgement(guess);

    return (
    <p key={idx} className='guess'>
      {results.map(resultToCell)}
    </p>);
  }

  return (
    <div className="guess-results">
      {guesses.map(guessToResult)}
    </div>
  );
}

export default GuessList;