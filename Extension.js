let minutes = 2;
let seconds = 0;
let isBreakTime = false;
let intervalId;

function createPopupWindow() {
  chrome.windows.create({
    url: 'popup.html',
    type: 'popup',
    width: 150,
    height: 150,
    left: screen.availWidth - 200,
    top: 0,
    focused: false
  }, function(window) {
    console.log('Popup window created with ID ' + window.id);
  });
}

function startTimer() {
  let timerDisplay = document.getElementById('timer');
  let startButton = document.getElementById('start-button');
  let resetButton = document.getElementById('reset-button');

  startButton.disabled = true;

  

  intervalId = setInterval(function() {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(intervalId);
        isBreakTime = !isBreakTime;
        if (isBreakTime) {
          minutes = 1;
        } else {
          minutes = 2;
        }
        startButton.disabled = false;
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let secondString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    timerDisplay.innerText = `${minuteString}:${secondString}`;
  }, 1000);

  resetButton.onclick = function() {
    clearInterval(intervalId);
    minutes = 2;
    seconds = 0;
    isBreakTime = false;
    timerDisplay.innerText = "2:00";
    startButton.disabled = false;
  }
}

// Supprimez cette ligne qui n'est pas nécessaire pour une extension
// document.addEventListener('DOMContentLoaded', function() {

  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', startTimer);
  createPopupWindow();
// });
