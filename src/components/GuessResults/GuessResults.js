import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessResults = ({ guesses, answer, setHasWon }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          value={guesses[num]}
          answer={answer}
          setHasWon={setHasWon}
        />
      ))}
    </div>
  );
};

export default GuessResults;
