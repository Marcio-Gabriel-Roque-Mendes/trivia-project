const getQuestion = async () => {
  const URL_QUESTION = `https://the-trivia-api.com/api/questions?limit=5`;
  const data = await fetch(URL_QUESTION);
  const dataJson = await data.json();
  return dataJson;
};

export { getQuestion };
