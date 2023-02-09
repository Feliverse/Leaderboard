import { postScore } from "./consumeAPI.js";

const form = document.querySelector('#Form');
const username = document.querySelector('#Name');
const score = document.querySelector('#Score');

const addToDOM = (user, score) => {
    const scoreLi = document.createElement('li');
    scoreLi.innerHTML = `${user}: ${score}`;
    scoreLi.classList.add('score');
    document.querySelector('.scores').appendChild(scoreLi);
  };

  const addToAPI = async (user, score) => {
    const { data, status } = await postScore(user, score);
    if (status !== 201) return `Error ${status}: ${data.message}`;
    addToDOM(user, score);
    return { data, status };
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const scoreUserName = username.value;
    const scoreValue = score.value;
    addToAPI(scoreUserName, scoreValue);
    form.reset();
  };