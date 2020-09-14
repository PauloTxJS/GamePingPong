window.onload = () => {
    setInterval(run, 1000 / 30);
}

const LeafDrawing = document.querySelector('#folha');
const drawingArea = LeafDrawing.getContext("2d");

let ballPositionX = ballPositionY =5;
let ballSpeedX = ballSpeedY = 10;
let playerPosition1 = playerPosition2 = 40; 
const racketHeight = 100;
let playerScore1 = playerScore2 = 0;
const fieldWidth = 600;
const fieldHeight = 500;
const racketNetWidth = 10;
const networkPositionX = 297.5; //larguraCampo / 2 - larguraRedeRaquete / 2
const networkPositionY = 0;
const ballSize = 10;
let racketEffect = 0.3;
let diferencaY;
let speedPlayer2 = 5;

gamerOne();
run();