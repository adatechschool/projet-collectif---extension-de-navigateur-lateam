

let timerConcentrate
let concentration = document.getElementById("Concentration")


function timer() {
    alert("Debut de la pause!")
}

function startTimerConcentrate() {
    timerConcentrate = window.setTimeout(timer,2000)
}


concentration.addEventListener("click", startTimerConcentrate());
