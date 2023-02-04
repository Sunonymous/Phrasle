import React from "react";

function Banner({ status, answer, guessCount }) {
  const mood = status === 'won' ? 'happy' : 'sad';

  const LOSE_MESSAGE = (<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>);
  const  WIN_MESSAGE = (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {guessCount} guess{guessCount > 1 && 'es'}</strong>.
    </p>
  );


  return (
    <div className={`${mood} banner`}>
      {status === "won"  && WIN_MESSAGE}
      {status === "lost" && LOSE_MESSAGE}
    </div>
  );
}

export default Banner;
