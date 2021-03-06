'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const giveWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const textContent = function (text) {
  document.querySelector('.number').textContent = text;
};

const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value); //user input result is string, so u should convert it to the number.
  // console.log(guessNum);

  //   if we don't put anything to the input box and push the button 'guess', it will give us 0 in console.log. We know that 0 is a falsy value and if we use it in if statement , it will ignore the 0. But we wanna write statement for 0 situation too. So we should use ! before guessNum , to make it true , when it is equal to 0:

  if (guessNum === secretNum) {
    displayMessage('🎉Congrats, you guessed the correct number!');
    backgroundColor('#60b347');
    giveWidth('30rem');
    textContent(secretNum);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!guessNum) {
    displayMessage('🔊 No number!');
  } else if (guessNum !== secretNum) {
    if (score > 1) {
      //here 0 is falsy value , it's empty box, not the 0 inside of a box
      displayMessage(guessNum > secretNum ? '📈Too high!' : '📉Too low!');
      score--;
      showScore(score);
    } else {
      displayMessage('🎇You lost!');
      showScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  showScore(score);
  giveWidth('15rem');
  textContent('?');
  backgroundColor('#222');
  document.querySelector('.guess').value = '';
});
