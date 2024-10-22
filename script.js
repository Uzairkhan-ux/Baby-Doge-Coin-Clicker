const coin = document.getElementById('coin');
const scoreElement = document.getElementById('score');
let score = 0;

coin.addEventListener('click', () => {
  score++;
  scoreElement.textContent = score;
});
function moveCoin() {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  coin.style.left = randomX + 'px';
  coin.style.top = randomY + 'px';
}

setInterval(moveCoin, 1000); // Move the coin every 1000 milliseconds (1 second)
