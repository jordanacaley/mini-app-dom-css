console.log("I'm linked");

const startButton = document.getElementById('start-btn');
const umbrella = document.querySelector('.fas.fa-umbrella-beach');

const handleClick = () => {
  umbrella.classList.toggle('orchid');
  if (umbrella.classList.contains('orchid')) {
    startButton.textContent = "Change to green"
  } else {
    startButton.textContent = "Change to purple"
  }
}

startButton.addEventListener("click", handleClick);