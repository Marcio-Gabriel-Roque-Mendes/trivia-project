const shuffleAnswers = (array) => {
  const CORRECT = 'btn-success correct-answer';
  const SORT_NUMBER = 0.5;
  return array.map((result) =>
    [
      {
        answer: result.correctAnswer,
        className: CORRECT,
        dataTestId: CORRECT,
        difficulty: result.difficulty,
      },
      ...result.incorrectAnswers.map((wrong, i) => (
        {
        answer: wrong,
        className: `btn-error wrong-answer-${i}`,
        dataTestId: `wrong-answer-${i}`,
        difficulty: result.difficulty,
        }
      )),
    ].sort(() => SORT_NUMBER - Math.random())
  );
};

export default shuffleAnswers;
