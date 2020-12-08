



    
  const canvas = document.getElementById("canvas");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const ctx = canvas.getContext("2d");




const images = {};

images.player = new Image();
images.player.src = '../public/rider.png';
// images.player.onload = 

const background = new Image();
background.src = '../public/pathtograndma.png';


const characterActions = ['up', 'right'];

const characters = [];

const  keys = [];

//47//89
class Character {

constructor(){

this.width = 70;
this.height = 99;
this.frameX = 1;
this.frameY = 3;
this.x = 0;
this.y = 100;
this.speed = (Math.random() * 1.5) + 3.5;
// this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
this.action = 'right';
this.moving = false;

}

draw(){

    drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width+50, this.height+50,this.x, this.y, this.width, this.height);
   
    

}

update(){

if(this.action === 'right'){
          this.moving = true;

    if(this.x > (canvas.width + this.width)) 
     {
      
      this.x = 0;
      // this.y = Math.random() * canvas.height - this.height;
    }else {
      
      this.x +=  this.speed;

    }

} else if (this.action === 'up' ){
      if(this.y > (canvas.height - this.height)){

        this.y = 0;
        // this.x = Math.random() * canvas.width;
      }else {

          this.y -= this.speed;

      }

}

}


// left = 37; up = 38; right = 39; down = 40

 movePlayer(){

  if(keys[38] && this.y >= 100 ){
    this.y -= this.speed;   
    this.frameY = 1;
    this.moving = true;
    
  }

  if(keys[37] && this.x > 0 ){
    this.x -= this.speed;   
    this.frameY = 1;
    this.moving = true;


  }

  if(keys[40] && this.y < (canvas.height - this.height)){
    this.y += this.speed;   
    this.frameY = 5;
    this.moving = true;


  }

  if(keys[39] && this.x < (canvas.width - this.width) ){
    this.x += this.speed;   
    this.frameY = 3;
    this.moving = true;


  }


}

 handlePlayerFrame(){ 

  if(this.frameY < 2){

    if(this.frameX < 8  && this.moving) this.frameX++
       else this.frameX = 0;
 }else if (this.frameY === 2){

  if(this.frameX < 5  && this.moving) this.frameX++
       else this.frameX = 0;

 }else if(this.frameY > 2 && this.frameY < 5){
    if(this.frameX < 3  && this.moving) this.frameX++
       else this.frameX = 0;
  

 }else if(this.frameY === 5){
    if(this.frameX < 2  && this.moving) this.frameX++
       else this.frameX = 0;
  

 }

}

}




characters.push(new Character()); 



function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){

ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH );

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


window.addEventListener("keydown", function(e){

  keys[e.which] = true;
  characters[0].moving = true;

  
});


window.addEventListener("keyup", function(e){

delete keys[e.which];
characters[0].moving = false;
 

});






// window.onload = setInterval(animate, 1000/30);


// window.addEventListener('resize', function() {

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// })



let fps, fpsInterval, startTime, now, then, elapsed;   

function startAnimating(fps){

fpsInterval = 1000/fps;  

then = Date.now();

startTime = then;

 animate();


}

function animate(){

requestAnimationFrame(animate);

now = Date.now();
elapsed = now - then;
if (elapsed > fpsInterval){

  then = now - (elapsed % fpsInterval)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    characters[0].draw();
    // characters[0].update();

    characters[0].movePlayer();
    characters[0].handlePlayerFrame();

}



}

startAnimating(20);



