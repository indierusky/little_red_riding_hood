import Character from './character';
import Particle from './particle';
import Barrier from './barrier';
import rider from '../public/newlilr.png';
import back from '../public/grandma3.jpg';
import collide from '../public/collide.png';
import wolf from '../public/wolves.png';
import bee from '../public/bees.png';
import topimg from '../public/lilredhood.jpg';

const unit = 80;
let score = 0;
let collissions  = 0;
let frame = 0;
let gameSpeed = 1;

//made image changes
let wolvesArray  = [];
let particlesArray = [];
let barriersArray = [];
const maxParticles = 100;
const maxWolves = 5;
const maxLives = 5;
const  keys = [];
const mode = 0;

window.barriersArray = barriersArray;
window.wolvesArray = wolvesArray;



document.addEventListener('DOMContentLoaded', () => {
    
  const canvas1 = document.getElementById("canvas");
  canvas1.width = 850;
  canvas1.height = 850;


 window.canvas1Height = canvas1.height;
 window.canvas1Width = canvas1.width;
 
  const ctx1 = canvas1.getContext("2d");

ctx1.fillStyle ='black';
ctx1.strokeStyle = 'red';
ctx1.font = '18px Verdana';
ctx1.strokeText('Use Arrow Keys to move. ', 400, 400);
ctx1.strokeText('Get basket of food to grandmas house.', 400, 440);
ctx1.strokeText('Avoid being eaten by wolf.', 400, 480);
ctx1.strokeText('PRESS ENTER TO START', 400,520);




const drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {

ctx1.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH );

}


let htp = document.getElementById("htp");
let db = document.getElementById("directions-background")

htp.onclick = function () {
  db.style.display = "block";
}

window.onclick = function (e) {
 
  if (e.target === db) {
    db.style.display = "none";
  }
}



const images = {};

// const topimg = document.createElement("img");

// topimg.src = buildAssetPath(topimg);
// topimg.classList.add("top");
const disp = document.createElement("div");
disp.classList.add("disp", "top", "top-img");
document.body.append(disp);
// document.body.appendChild(topimg);

images.player = new Image();
images.player.src = buildAssetPath(rider);

images.back = new Image();
images.back.src = buildAssetPath(back);

images.collide = new Image();
images.collide.src = buildAssetPath(collide);

images.wolf = new Image();
images.wolf.src = buildAssetPath(wolf);



images.bee = new Image();
images.bee.src = buildAssetPath(bee);


function buildAssetPath(imgSrc) {
  return `./dist/${imgSrc}`;
}



 images.bee.onload = function (){
   
let ridingHood = new Character(ctx1,images.player, keys, score, gameSpeed)

// wolfimg.onload = function() {



const initBarriers = () => {

for(let i = 0; i < 2; i++){

let x = i * 350;

wolvesArray.push( new Barrier(canvas1, ctx1, x, canvas1.height-unit *2 - 20, unit, unit, 1, gameSpeed,images.wolf, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 300;

wolvesArray.push( new Barrier(canvas1, ctx1, x, canvas1.height-unit *3  - 20, unit *2, unit, -2, gameSpeed,images.wolf,'wolfl'))


}

for(let i = 0; i < 2; i++){

let x = i * 350;

wolvesArray.push( new Barrier(canvas1, ctx1, x, canvas1.height-unit *4 - 20, unit, unit, 2, gameSpeed,images.wolf, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 400;

barriersArray.push( new Barrier(canvas1, ctx1, x, canvas1.height-unit *5 - 20, unit * 2, unit, -2, gameSpeed,images.bee, 'bee'))


}


// beeimg.onload = function() {

for(let i = 0; i < 3; i++){

let x = i * 200;

barriersArray.push( new Barrier(canvas1, ctx1, x, canvas1.height-unit *6 - 20, unit * 2, unit, 1,gameSpeed,images.bee, 'bee'))
}
// }



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

                // destroy(wolvesArray[i]);
                drawSprite(images.collide, 0, 0, 81, 80, ridingHood.x, ridingHood.y, ridingHood.width, ridingHood.height )
                resetGame();
        }

        
}

for(let i =0; i < barriersArray.length; i++){

if(collide(ridingHood, barriersArray[i])){

                // destroy(barriersArray[i]);
                drawSprite(images.collide, 0, 0, 81, 80, ridingHood.x, ridingHood.y, ridingHood.width, ridingHood.height )
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
ridingHood.x = canvas1.width/2 - ridingHood.width/2;
ridingHood.y = canvas1.height - ridingHood.height-40;
initBarriers();
}


window.addEventListener("keydown", function(e){

  keys[e.code] = true;
  if(e.code === 'Enter') startAnimating(20);
  ridingHood.moving = true;

  const scoringPositionY =  parseFloat(ridingHood.y / window.innnerHeight).toFixed(2);
  const scoringPositionX = parseFloat(ridingHood.x / window.innerWidth).toFixed(2);

    if( (  (window.innerHeight > ridingHood.y) && (window.innerHeight - ridingHood.y) < 365)  && ((window.innerWidth - ridingHood.x) < 500)  )scores();

  
});


window.addEventListener("keyup", function(e){


delete keys[e.code];
ridingHood.moving = false;

if( (  (canvas1.height > ridingHood.y) && (canvas1.height - ridingHood.y) < 365)  && ((canvas1.width - ridingHood.x) < 500)  )scores();



});

window.ridingHood = ridingHood;



// window.onload = setInterval(animate, 1000/30);


window.addEventListener('resize', function() {

canvas1.height = window.innerHeight;
canvas1.width = window.innerWidth;

})








function scoreBoard() {
ctx1.fillStyle ='black';
ctx1.strokeStyle ='black';
ctx1.font = '18px Verdana';
ctx1.strokeText('Score', 370, 65);
ctx1.font = '60px Verdana';
ctx1.fillText(score, 370, 110 )
ctx1.font = '18px Verdana';
ctx1.strokeText('Lives:' + collissions, 10, 175);
ctx1.strokeText('Game Speed:' + gameSpeed, 10, 195);


}

function collide(first, second){

return !(first.x > (second.x + second.width) || 
        (first.x + first.width) < second.x || 
        first.y > (second.y + second.height) ||
        (first.y + first.height) < second.y);


}

function resetGame(){

ridingHood.x = canvas1.width/2 - ridingHood.width/2;
ridingHood.y = canvas1.height - ridingHood.height-40;
score = 0;
collissions++ 
gameSpeed = 1;

}


let fps, fpsInterval, startTime, now, then, elapsed;   

function startAnimating(fps){

// document.body.remove(disp);


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
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  
  ctx1.drawImage(images.back, 100, 100, canvas1.width, canvas1.height);
    handleParticles();
    ridingHood.drawSprite();

    ridingHood.movePlayer();
    ridingHood.handlePlayerFrame();
    scoreBoard();
    handleBarriers();
    

}



// }



}



}


});












