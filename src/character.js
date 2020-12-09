class Character {

constructor(){

this.width = 92;
this.height = 91;
this.frameX = 1;
this.frameY = 3;
this.x = canvas.width/2 - this.width/2;
this.y = canvas.height - this.height - 40;
this.speed = (Math.random() * 1.5) + 3.5;
// this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
this.action = 'right';
this.moving = false;

}

draw(){

    drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height,this.x, this.y, this.width, this.height+15);
   
    

}

// update(){

// if(this.action === 'right'){
//           this.moving = true;

//     if(this.x > (canvas.width + this.width)) 
//      {
      
//       this.x = 0;
//       // this.y = Math.random() * canvas.height - this.height;
//     }else {
      
//       this.x +=  this.speed;

//     }

// } else if (this.action === 'up' ){
//       if(this.y > (canvas.height - this.height)){

//         this.y = 0;
//         // this.x = Math.random() * canvas.width;
//       }else {

//           this.y -= this.speed;

//       }

// }

// }


// left = 37; up = 38; right = 39; down = 40

 movePlayer(){

  if(keys['ArrowUp'] && this.y >= 100 ){
    this.y -= this.speed;   
    this.frameY = 1;
    this.moving = true;
    
  }

  if(keys['ArrowLeft'] && this.x > 0 ){
    this.x -= this.speed;   
    this.frameY = 1;
    this.moving = true;


  }

  if(keys['ArrowDown'] && this.y < (canvas.height - this.height)){
    this.y += this.speed;   
    this.frameY = 2;
    this.moving = true;


  }

  if(keys['ArrowRight'] && this.x < (canvas.width - this.width) ){
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