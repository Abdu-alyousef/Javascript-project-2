const scoreEl0 = document.getElementById("score--0");
const scoreEl1 = document.getElementById("score--1");

const currentEl0 = document.getElementById("current--0");
const currentEl1 = document.getElementById("current--1");

const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const imgDice = document.querySelector(".dice");

imgDice.classList.add("hidden");
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle("player--active");
  playerEl1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    imgDice.classList.remove("hidden");
    imgDice.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      imgDice.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
