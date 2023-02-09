import { getScores } from "./consumeAPI.js";

const refreshButton = document.querySelector('.refresh-button')

const refreshScores = async () => {
  const { data, status } = await getScores();
  if (status !== 200) return null;

  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  data.result.map((score) => {

    const li = `<li class="score">${score.user}:${score.score}</li>`;
    scores.append(li)

  });
  console.log('score:', scores);
  return scores;
};

refreshButton.onclick = () => refreshScores();