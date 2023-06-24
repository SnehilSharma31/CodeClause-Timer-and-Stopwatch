var hours = 0;
var min = 0;
var sec = 0;
var miliSec = 0;
var timer;
var timerRunning = false;

function callTimer() {
    miliSec--;
    if (miliSec < 0) {
        miliSec = 99;
        sec--;
        if (sec < 0) {
            sec = 59;
            min--;
            if (min < 0) {
                min = 59;
                hours--;
                if (hours < 0) {
                    stop();
                    return;
                }
            }
        }
    }
    document.getElementById("timer").innerHTML = hours + ":" + min + ":" + sec + ":" + miliSec;
}

function start() {
    if (!timerRunning) {
        var hoursInput = document.querySelector(".timer-hours");
        var minutesInput = document.querySelector(".timer-minutes");
        var secondsInput = document.querySelector(".timer-seconds");

        hours = parseInt(hoursInput.value) || 0;
        min = parseInt(minutesInput.value) || 0;
        sec = parseInt(secondsInput.value) || 0;

        if (hours < 0 || min < 0 || sec < 0) {
            alert("Please enter positive values for hours, minutes, and seconds.");
            return;
        }

        hoursInput.disabled = true;
        minutesInput.disabled = true;
        secondsInput.disabled = true;

        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("reset").disabled = false;

        timer = setInterval(callTimer, 10);
        timerRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    timerRunning = false;

    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = false;
}

function reset() {
    clearInterval(timer);
    timerRunning = false;

    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;

    var hoursInput = document.querySelector(".timer-hours");
    var minutesInput = document.querySelector(".timer-minutes");
    var secondsInput = document.querySelector(".timer-seconds");

    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;

    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";

    document.getElementById("timer").innerHTML = "0:0:0:0";
}
