// src/index.js
import "./styles/index.scss";


let canvas = document.getElementById("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");


const images = {};

images.player = new Image();
images.player.src = '../png/idle(1).png';

const playerWidth = '103.0625';
const playerHeight = '113.125';
let playerFrameX = 3;
let playerFrameY = 3;

let playerX = 0;
let playerY = 0;

const playerSpeed = 6;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){

ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH )

}

// function animate(){

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight)
// }

// window.onload = setInterval(animate, 1000/30);