let time = 60;

const timeBox = document.querySelector("main h1");

function displayTime(second){
    const minutes = Math.floor(second / 60);
    const seconds = Math.floor(second % 60);
    timeBox.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function countDown(){
    time--;
    time <= 0 ? finishCountDown() : null
    displayTime(time);
}

const countInterval = setInterval(() => {
    countDown();
}, 1000);

function finishCountDown(){
    clearInterval(countInterval);
}