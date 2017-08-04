var time;
var startTimer;

$(document).ready(function() {
  time = 60;
  setTime(time);
});

function setTime(time) {
  var minutes = Math.floor(time / 60)
  var seconds = Math.floor(time % 60)
  document.getElementById('time').innerHTML = minutes + ":" + seconds;
}

function beginTimer() {
  startTimer = setInterval(function() {
    setTime(time);
    time -= 1;
    if (time < 0) {
      clearInterval(startTimer);
      document.getElementById('time').innerHTML = "Times Up!";
      initializeBreak();
    }
  }, 1000);
}

function incrementTime() {
  time += 60;
  setTime(time);
}

function decrementTime() {
  time -= 60;
  setTime(time);
}

function initializeBreak() {
  time = 300;
  setTime(time);
}

function pauseTimer() {
  clearInterval(startTimer);
}

function resetTimer() {
  pauseTimer();
  time = 1500;
  setTime(time);
}
