

let timerConcentrate
let concentration = document.getElementById("Concentration")


function timer() {
    alert("Vous venez de commencer votre pause. Enjoy !")
}

function startTimerConcentrate() {
    timerConcentrate = window.setTimeout(timer,1000)
}


concentration.addEventListener("click", startTimerConcentrate);
