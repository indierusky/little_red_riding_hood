
import Character from './character';
import Particle from './particle';
import Barrier from './barrier';
// import {resetGame, collide, scoreBoard} from './score';




const unit = 80;
let score = 0;
let collissions  = 0;
let frame = 0;
let gameSpeed = 1;

let wolvesArray  = [];
let particlesArray = [];
let barriersArray = [];
const maxParticles = 100;
const maxWolves = 5;
const maxLives = 5;
const  keys = [];

setTimeout(  function() { }, 5000);

document.addEventListener('DOMContentLoaded', () => {
    
  const canvas1 = document.getElementById("canvas");
  canvas1.width = 850;
  canvas1.height = 850;
  const ctx1 = canvas1.getContext("2d");



const drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {

ctx1.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH );

}




const images = {};

images.player = new Image();
images.player.src = '../public/rider.png';

const background = new Image();
background.src = '../public/grandma3.jpg';

const collided = new Image();
collided.src = '../public/collide.png';

const wolfimg = new Image();
wolfimg.src = '../public/wolves.png';

const beeimg = new Image();
beeimg.src = '../public/bees.png';






images.player.onload = function (){
   
let ridingHood = new Character(ctx1,images.player, keys, score, gameSpeed)

wolfimg.onload = function() {

beeimg.onload = function() {

const initBarriers = () => {

for(let i = 0; i < 2; i++){

let x = i * 350;

wolvesArray.push( new Barrier(ctx1, x, canvas1.height-unit *2 - 20, unit, unit, 1, gameSpeed,wolfimg, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 300;

wolvesArray.push( new Barrier(ctx1, x, canvas1.height-unit *3 - 20, unit *2, unit, -2, gameSpeed,wolfimg,'wolfl'))


}

for(let i = 0; i < 2; i++){

let x = i * 350;

wolvesArray.push( new Barrier(ctx1, x, canvas1.height-unit *4 - 20, unit, unit, 2, gameSpeed,wolfimg, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 400;

barriersArray.push( new Barrier(ctx1, x, canvas1.height-unit *5 - 20, unit * 2, unit, -2, gameSpeed,beeimg, 'bee'))


}

for(let i = 0; i < 3; i++){

let x = i * 200;

barriersArray.push( new Barrier(ctx1, x, canvas1.height-unit *6 - 20, unit * 2, unit, 1,gameSpeed,beeimg, 'bee'))


}


}

initBarriers();


function handleBarriers(){

for(let i=0; i < wolvesArray.length; i++){

        wolvesArray[i].update();
        wolvesArray[i].draw();

}

for(let i=0; i < barriersArray.length; i++){

        barriersArray[i].update();
        barriersArray[i].draw();

}

for(let i =0; i < wolvesArray.length; i++){

        if(collide(ridingHood, wolvesArray[i])){

                drawSprite(collided, 0, 0, 81, 80, ridingHood.x, ridingHood.y, ridingHood.width, ridingHood.height )
                resetGame();
        }

        
}

for(let i =0; i < barriersArray.length; i++){

if(collide(ridingHood, barriersArray[i])){

                drawSprite(collided, 0, 0, 81, 80, ridingHood.x, ridingHood.y, ridingHood.width, ridingHood.height )
                resetGame();
        }
}

}


function handleParticles(){
for(let i =0; i < particlesArray.length; i++ ){

    particlesArray[i].update();
    particlesArray[i].draw();
}



if(particlesArray.length > maxParticles){

    for(let i=0; i < particlesArray.length; i++){
        particlesArray.pop();
    }

}

if(((keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'])) && ridingHood.y > 100 && (particlesArray.length < maxParticles + 10)){

    for(let i=0; i < 10; i++){

            let pt = new Particle(ctx1, ridingHood.x, ridingHood.y);
            particlesArray.unshift(pt);


    }
}
}


function scores(){

score++;
gameSpeed += 0.5;
ridingHood.x = canvas.width/2 - this.width/2;
ridingHood.y = canvas.height - this.height-40;

}


window.addEventListener("keydown", function(e){

  keys[e.code] = true;
  ridingHood.moving = true;

  
});


window.addEventListener("keyup", function(e){

delete keys[e.code];
ridingHood.moving = false;
 

});



// window.onload = setInterval(animate, 1000/30);


window.addEventListener('resize', function() {

canvas1.height = window.innerHeight;
canvas1.width = window.innerWidth;

})

 if(ridingHood.y < 520  && ridingHood.x > 630) scores();





function scoreBoard() {
ctx1.fillStyle ='black';
ctx1.strokeStyle ='black';
ctx1.font = '18px Verdana';
ctx1.strokeText('Score', 370, 15);
ctx1.font = '60px Verdana';
ctx1.fillText(score, 370, 65 )
ctx1.font = '18px Verdana';
ctx1.strokeText('Lives:' + collissions, 10, 175);
ctx1.strokeText('Game Speed:' + gameSpeed, 10, 195);


}

function collide(first, second){

return !(first.x > second.x + second.width || 
        first.x + first.width < second.x || 
        first.y > second.y + second.height ||
        first.y + first.height < second.y);


}

function resetGame(){

ridingHood.x = canvas.width/2 - ridingHood.width/2;
ridingHood.y = canvas.height - ridingHood.height-40;
score = 0;
collissions++ 
gameSpeed = 1;

}


let fps, fpsInterval, startTime, now, then, elapsed;   

function startAnimating(fps){

fpsInterval = 1000/fps;  

then = Date.now();

startTime = then;

 animate();


}

const animate = () => {

requestAnimationFrame(animate);

now = Date.now();
elapsed = now - then;
if (elapsed > fpsInterval){

  then = now - (elapsed % fpsInterval)
  ctx1.clearRect(0, 0, canvas.width, canvas1.height);
  
  ctx1.drawImage(background, 100, 100, canvas1.width, canvas1.height);
    handleParticles();
    ridingHood.drawSprite();

    ridingHood.movePlayer();
    ridingHood.handlePlayerFrame();
    scoreBoard();
    handleBarriers();
    

}



}

startAnimating(20);


}






}

}



})











