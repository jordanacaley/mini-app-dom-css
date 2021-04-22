console.log("I'm linked");

const startButton = document.getElementById('start-btn');
const umbrella = document.querySelector('.fas.fa-umbrella-beach');

const handleClick = () => {
  umbrella.classList.toggle('orchid');
  console.log(umbrella.classList)
}

startButton.addEventListener("click", handleClick);