import { useId } from "react";
import { useState } from "react";

const Input = ({
  guesses,
  setGuesses,
  numberOfGuesses,
  setNumberOfGuesses,
  hasWon,
  setHasWon,
  answer,
}) => {
  const inputId = useId();
  const [word, setWord] = useState("");
  const [errorValidation, setErrorValidation] = useState({
    isError: false,
    message: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    if (word.length < 5) {
      setErrorValidation({
        isError: true,
        message: "The word must be five characters!",
      });
      return;
    }

    if (numberOfGuesses < 6) {
      setNumberOfGuesses(numberOfGuesses + 1);
      setGuesses([...guesses, word]);
      setWord("");
    }

    if (word === answer) {
      setHasWon(true);
    }
  };

  const changeHandler = (event) => {
    const nextWord = event.target.value.toUpperCase();
    setWord(nextWord);

    if (nextWord.length === 5) {
      setErrorValidation({
        isError: false,
        message: "",
      });
    }
  };

  return (
    <form onSubmit={submitHandler} className="guess-input-wrapper">
      <label htmlFor={inputId}>Enter guess:</label>
      <input
        id={inputId}
        type="text"
        value={word}
        onChange={changeHandler}
        required
        minLength={5}
        maxLength={5}
        disabled={numberOfGuesses >= 6 || hasWon}
      />
      <div>
        {errorValidation.isError && (
          <p className="error">{errorValidation.message}</p>
        )}
      </div>
    </form>
  );
};

export default Input;
