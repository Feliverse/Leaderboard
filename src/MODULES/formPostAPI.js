import { postScore } from "./consumeAPI.js";

const form = document.querySelector('#Form');
const username = document.querySelector('#Name');
const score = document.querySelector('#Score');

const addToDOM = (user, score) => {
    const scoreLi = document.createElement('li');
    scoreLi.innerHTML = `${user}: ${score}`;
    scoreLi.classList.add('score');
    document.querySelector('.scores_list').appendChild(scoreLi);
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const scoreUserName = username.value;
    const scoreValue = score.value;
    addToDOM(scoreUserName, scoreValue);
    form.reset();
  };