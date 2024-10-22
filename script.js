const coin = document.getElementById('coin');
const scoreElement = document.getElementById('score');
let score = 0;

coin.addEventListener('click', () => {
  score++;
  scoreElement.textContent = score;
});
