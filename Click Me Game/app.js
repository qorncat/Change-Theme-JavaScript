/*
*The Project By CodErdal
*https://erdal.github.io
*/

const button = document.getElementById("clickme");

const gamestop = document.getElementById("finishGame");
const gamestart = document.getElementById("startGame");

const score = document.querySelector("h3 #score");

const swidth = window.innerWidth-100;
const sheight = window.innerHeight-100;

function changePosition() {

    let swidth = window.innerWidth-100;
    let sheight = window.innerHeight-100;

    let randomNumber1 = Math.floor(Math.random() * swidth);
    let randomNumber2 = Math.floor(Math.random() * sheight);

    button.style.position = "absolute";
    button.style.top = randomNumber2+"px";
    button.style.left = randomNumber1+"px";

}

function startGame(){
    sessionStorage.setItem("scor", 0);
    button.style.display = "block";
    const change = setInterval(changePosition, 1250);
    gamestop.style.display = "inline-block";
    gamestart.style.display = "none";
}

function finishGame(){
    let scor = parseInt(sessionStorage.getItem("scor"));
    button.style.display = "none";
    score.innerHTML = "Last - "+scor;
    gamestop.style.display = "none";
    gamestart.style.display = "inline-block";
}

function giveScore(){
    let scor = parseInt(sessionStorage.getItem("scor"));
    let newscor = scor+1;
    sessionStorage.setItem("scor", newscor);
    score.innerHTML = newscor;
}

button.addEventListener("click", giveScore);

button.addEventListener("click", changePosition);

gamestop.addEventListener("click", finishGame);

gamestart.addEventListener("click", startGame);