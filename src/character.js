
class Character {

constructor(ctx, img, keys, score, gameSpeed){

this.width = 96;
this.height = 89;
this.frameX = 0;
this.frameY = 3;
this.x = canvas.width/2 - this.width/2;
this.y = (canvas.height - this.height - 40) + 50;
this.speed = (Math.random() * 1.5) + 3.5;
// this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
this.moving = false;
this.image = img;
this.ctx = ctx;
this.keys = keys;
this.score = score;
this.gameSpeed = gameSpeed;

}



drawSprite(){

this.ctx.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.height, this.width, this.x, this.y, this.width, this.height+15 );

}


// draw(){

//     drawSprite( this.ctx, this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height,this.x, this.y, this.width, this.height+15);
   

// }




 movePlayer(){

  if(this.keys['ArrowUp'] && this.y >= 100 ){
    this.y -= this.speed;   
    this.frameY = 1;
    this.moving = true;
    
  }

  if(this.keys['ArrowLeft'] && this.x > 0 ){
    this.x -= this.speed;   
    this.frameY = 3;
    this.width = 76;
    this.height =69;
    this.moving = true;


  }

  if(this.keys['ArrowDown'] && this.y < (canvas.height - this.height)){
    this.y += this.speed;   
    this.frameY = 2;
    this.moving = true;


  }

  if(this.keys['ArrowRight'] && this.x < (canvas.width - this.width) ){
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



export default Character;