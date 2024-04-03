import world from "./data (2).js";

const aa = alert("Are you ready");

const randomWord = document.getElementById("random__world");
let globalWorld;
const input = document.getElementById("random_world_input");
const span = document.getElementById("user__score");
const times = document.getElementById("user__time");
const changeLevel = document.getElementById("change__level");
input.focus();
let score = 0;
let time = 10;
let level = "easy";

times.parentElement.style.color = "blue";
function randomWordGenerator() {
  const randomNamber = Math.trunc(Math.random() * world.length);
  randomWord.textContent = world[randomNamber];
  globalWorld = world[randomNamber];
}

randomWordGenerator();

input.addEventListener("input", () => {
  if (input.value == globalWorld) {
    randomWordGenerator();
    input.value = "";
    score++;
    span.textContent = score;
    const music = new Audio("./audio/decidemp3-14575.mp3");
    music.play();

    if (level == "easy") {
      time += 5;
    } else if (level == "medium") {
      time += 3;
    } else {
      time += 2;
    }
  }
});

const timer = setInterval(() => {
  time--;

  times.textContent = `${time}s`;
  if (time > 7) {
    times.parentElement.style.color = "blue";
  } else if (time <= 7 && time > 4) {
    times.parentElement.style.color = "green";
    document.body.style = `box-shadow: -3px -1px 27px 1px rgba(25,213,17,0.76) inset;
    -webkit-box-shadow: -3px -1px 27px 1px rgba(25,213,17,0.76) inset;
    -moz-box-shadow: -3px -1px 27px 1px rgba(25,213,17,0.76) inset;`;
  } else if (time <= 4 && time > 0) {
    times.parentElement.style.color = "red";
    document.body.style = `box-shadow: -3px -1px 27px 1px rgba(241,17,17,0.76) inset;
    -webkit-box-shadow: -3px -1px 27px 1px rgba(241,17,17,0.76) inset;
    -moz-box-shadow: -3px -1px 27px 1px rgba(241,17,17,0.76) inset;`;
    const music = new Audio("./audio/microwave-end-sound-98680.mp3");
    music.play();
  }

  if (time == -1) {
    clearInterval(timer);
    const music = new Audio("./audio/negative_beeps-6008.mp3");
    music.play();
    alert("Game Over 😕");
  }
}, 1000);

changeLevel.addEventListener("change", () => {
  level = changeLevel.value;
});
