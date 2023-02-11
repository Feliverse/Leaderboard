import { getScores } from './consumeAPI';

const refreshButton = document.querySelector('.refresh-button');

const refreshScores = async () => {
  const { data, status } = await getScores();

  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  if (status !== 200) {
   
  } else {
    data.result.forEach((element) => {
      const score = document.createElement('li');
      score.classList.add('score');
      score.innerHTML = `&#9812 &nbsp &nbsp ${element.user} &nbsp:&nbsp ${element.score}`;
      scores.appendChild(score);
    });
  }
  return scores;
};

refreshButton.onclick = () => refreshScores();