import React from "react";
import { useState } from "react";
import Input from "../Form/Input";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />

      {numberOfGuesses >= 6 || hasWon ? (
        <Banner
          bannerResult={hasWon ? "happy" : "sad"}
          numberOfGuesses={numberOfGuesses}
          hasWon={hasWon}
        />
      ) : null}

      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        numberOfGuesses={numberOfGuesses}
        setNumberOfGuesses={setNumberOfGuesses}
        hasWon={hasWon}
        setHasWon={setHasWon}
        answer={answer}
      />
    </>
  );
}

export default Game;
