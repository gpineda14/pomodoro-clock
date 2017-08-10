var currSesh;
var states = {"session": 1500, "break": 300};
var time;
var session = true;

function setTime(time) {
  var minutes;
  var seconds;
  if (Math.floor(time / 60) === 0) {
    minutes = "00";
  }
  else if (Math.floor(time / 60 ) < 10) {
    minutes = "0" + Math.floor(time / 60);
  }
  else {
    minutes = Math.floor(time / 60);
  }
  if (Math.floor(time % 60) === 0) {
    seconds = "00";
  }
  else if (Math.floor(time % 60) < 10) {
    seconds = "0" + Math.floor(time % 60);
  }
  else {
    seconds = Math.floor(time % 60);
  }
  document.getElementById('time').innerHTML = minutes + ":" + seconds;
}

function beginSession(state) {
  clearInterval(currSesh);
  time = states[state];
  currSesh = setInterval(function() {
    time -= 1;
    if (time === 0) {
      if (session === true) {
        beginSession("break");
        session = false;
        changeColor(session);
      }
      else {
        beginSession("session");
        session = true;
        changeColor(session);
      }
    }
    setTime(time);
  }, 1000);
}

function incrementTime() {
  if (session) {
    time += 60;
    setTime(time);
  }
  else {
    time += 60;
    setTime(time);
  }
}

function decrementTime() {
  if (session) {
    time -= 60;
    setTime(time);
  }
  else {
    time -= 60;
    setTime(time);
  }
}

function pauseSession() {
  clearInterval(currSesh);
}

function resumeSession() {
  clearInterval(currSesh);
  currSesh = setInterval(function() {
    time -= 1;
    if (time === 0) {
      if (session === true) {
        beginSession("break");
        session = false;
        changeColor(session);
      }
      else {
        beginSession("session");
        session = true;
        changeColor(session);
      }
    }
    setTime(time);
  }, 1000);
}

function resetSession() {
  if (session) {
    beginSession("session");
  }
  else {
    beginSession("break");
  }
}

function changeColor(session) {
  if (session) {
    $("#sessionState").css({"background-color": "#5cb85c", "color": "white"});
    $("#breakState").css({"background-color": "white", "color": "black"});
  }
  else {
    $("#breakState").css({"background-color": "#d9534f", "color": "white"});
    $("#sessionState").css({"background-color": "white", "color": "black"});
  }
}

$(document).ready(function() {
  setTime(states["session"]);
  beginSession("session");
  changeColor(session);

  $("#resumeSession").on("click", resumeSession);
  $("#pauseSession").on("click", pauseSession);
  $("#resetSession").on("click", resetSession);
  $("#incrementTime").on("click", incrementTime);
  $("#decrementTime").on("click", decrementTime);
});
