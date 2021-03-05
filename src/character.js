
class Character {

constructor(ctx, img, keys, score, gameSpeed){

this.width = 48;
this.height = 48;
this.frameX = 0;
this.frameY = 2;
this.x = canvas.width/2 - this.width/2;
this.y = (canvas.height - this.height - 40) + 50;
this.speed = (Math.random() * 1.5) + 3.5;
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
    this.frameY = 3;
    this.moving = true;
    
  }

  if(this.keys['ArrowLeft'] && this.x > 0 ){
    this.x -= this.speed;   
    this.frameY = 1;
    this.width = 48;
    this.height = 48;
    this.moving = true;


  }

  if(this.keys['ArrowDown'] && this.y < (canvas.height - this.height)){
    this.y += this.speed;   
    this.frameY = 0;
    this.moving = true;


  }

  if(this.keys['ArrowRight'] && this.x < (canvas.width - this.width) ){
    this.x += this.speed;   
    this.frameY = 2;
    this.moving = true;


  }
  //  if(this.y <= 600  && this.x >= 1350){

    // const scoringPositionY =  parseFloat(ridingHood.y / window.innerHeight).toFixed(2);
    // const scoringPositionX = parseFloat(ridingHood.x / window.innerWidth).toFixed(2);
  
    // console.log(`posx: '${scoringPositionX}`);
    // console.log(`posy: '${scoringPositionY}`);

  //  if( ( scoringPositionY <= parseFloat(".79").toFixed(2)) && ( scoringPositionX >= parseFloat(".71").toFixed(2)) ) {


//   if( ((window.innerHeight - ridingHood.y) < 300)  && ((window.innerWidth - ridingHood.x) < 500)  )
// {     
//       this.score++;
//       this.gameSpeed += .5;
//    }


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