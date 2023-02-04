import React from "react";

function GuessInput({ status, answer, nextGuess, setNextGuess, submitFunc}) {
  const [wasInvalid, setWasInvalid] = React.useState(false);
  const length = answer.length;

  const prompt = wasInvalid ? `Guess a ${length}-Letter Word:` : "Guess a Word:"

  return (
    <form className="guess-input-wrapper" onSubmit={submitFunc}>
      <label htmlFor="guess-input">{prompt}</label>
      <input
        disabled={status !== 'playing'}
        required={true}
        id="guess-input"
        type="text"
        minLength={length}
        maxLength={length}
        pattern={`[A-Za-z]{${length}}`}
        value={nextGuess}
        onChange={(e) => setNextGuess(e.target.value.toUpperCase())}
        onInvalid={() => setWasInvalid(true)}
      />
    </form>
  );
}

export default GuessInput;
