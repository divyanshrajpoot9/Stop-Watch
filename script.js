const timerTag = document.getElementById("timer");
const startBtnTag = document.getElementById("startBtn");
const stopBtnTag = document.getElementById("stopBtn");
const resetBtnTag = document.getElementById("resetBtn");

let intervalId;
let startTime = 0;
let watchTime = 0;

function startTimer() {
  startTime = Date.now() - watchTime;

  intervalId = setInterval(() => {
    watchTime = Date.now() - startTime;

    showTimeInFormate(watchTime);
  }, 10);
}

function showTimeInFormate(watchTime) {
  let milisecond = watchTime % 100;

  let second = Math.floor(watchTime / 1000) % 60;

  let minimutes = Math.floor(Math.floor(watchTime / 1000) / 60) % 60;

  let hrs = Math.floor(Math.floor(Math.floor(watchTime / 1000) / 60) / 60);

  timerTag.textContent =
    hrs + ":" + minimutes + ":" + second + "." + milisecond;
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  watchTime = 0;
  showTimeInFormate(watchTime);
  timerTag.innerText = "00:00:00"
}

startBtnTag.addEventListener("click", startTimer);
stopBtnTag.addEventListener("click", stopTimer);
resetBtnTag.addEventListener("click", resetTimer);