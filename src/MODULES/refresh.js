import { getScores } from './consumeAPI';

const refreshButton = document.querySelector('.refresh-button');

const refreshScores = async () => {
  const { data, status } = await getScores();

  const scores = document.querySelector('.scores');
  if (status !== 200) {
    scores.innerHTML = '';
  } else {
    data.result.forEach((element) => {
      const score = document.createElement('li');
      score.classList.add('score');
      score.innerHTML = `${element.user}:${element.score}`;
      scores.appendChild(score);
    });
  }
  return scores;
};

refreshButton.onclick = () => refreshScores();