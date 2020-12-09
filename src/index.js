
    
  const canvas1 = document.getElementById("canvas");
  canvas1.width = 800;
  canvas1.height = 800;
  const ctx1 = canvas1.getContext("2d");


  const canvas2 = document.getElementById("canvas2");
  canvas2.width = 800;
  canvas2.height = 600;
  const ctx2 = canvas2.getContext("2d");

  const canvas3 = document.getElementById("canvas3");
  canvas3.width = 800;
  canvas3.height = 800;
  const ctx3 = canvas3.getContext("2d");

  // const canvas4 = document.getElementById("canvas4");
  // canvas4.width = 900;
  // canvas4.height = 900;
  // const ctx4 = canvas4.getContext("2d");


const unit = 80;
let score = 0;
let collisions  = 0;
let frame = 0;
let gameSpeed = 1;

let wolvesArray  = [];
let particlesArray = [];
let barriersArray = [];
const maxParticles = 250;
const maxWolves = 5;



const images = {};

images.player = new Image();
images.player.src = '../public/rider.png';
// images.player.onload = 

const background = new Image();
background.src = '../public/grandma3.jpg';


const characterActions = ['up', 'right'];

const characters = [];

const  keys = [];

//47//89








function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){

ctx1.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH );

}




// const playerWidth = 47.5;
// const playerHeight = 89;

const playerWidth = 47.5;
const playerHeight = 89;
let playerFrameX = 3;
let playerFrameY = 3;

let playerX = 40;
let playerY = -100;

const playerSpeed = 2;





// function animate(){

    // drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);

    // if(playerFrameX < 5 ) playerFrameX++;
    // else playerFrameX = 3;

    // if(playerX < canvas.width + playerWidth) playerX +=  playerSpeed;


    


//     requestAnimationFrame(animate);


// }

// animate()

//  



