import { range } from "./utils";

export function checkGuess(answer, guess) {
  console.log(`Hi! I'm comparing ${answer} to ${guess}!`);
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = 'correct';
    } else if (answerChars.includes(guessChar)) {
      status = 'misplaced';
    } else {
      status = 'incorrect';
    }
    return {
      letter: guessChar,
      status,
    };
  });
}
export function isEmptyWord(str) {
  return str.trim().length === 0;
}

export function makeStartingGuesses(n, len) {
  return range(0, n, 1).map(() => ' '.repeat(len));
}