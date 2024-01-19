const Banner = ({ bannerResult, numberOfGuesses, hasWon }) => {
  return (
    <div className={`${bannerResult} banner`}>
      <>
        {hasWon ? (
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            {numberOfGuesses === 1 ? (
              <strong>1 guess!</strong>
            ) : (
              <strong>{numberOfGuesses} guesses!</strong>
            )}
          </p>
        ) : (
          <p>
            <strong>Sorry!</strong> You didn't get it in 6 guesses.
          </p>
        )}
      </>
    </div>
  );
};

export default Banner;
