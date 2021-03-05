class Barrier {

constructor(canvas1,ctx, x, y, width, height, speed, gameSpeed,img,type){

this.canvas1 = canvas1;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.speed = speed;
this.type = type;
this.frameX = 0;
this.frameY = 0;
this.ctx = ctx;
this.gameSpeed = gameSpeed;
this.image = img;
}


draw(){


if(this.type === 'wolf'){
    
this.frameY = 1;
this.frameX =0;
if (this.frameX > 2) this.frameX = 0;
else this.frameX++;
this.ctx.drawImage(this.image,this.frameX*288.5, this.frameY*100, 47,48, this.x, this.y, this.width, this.height)
// this.ctx.drawImage(this.image,this.frameX*145, this.frameY*65, 47,48, this.x , this.y, this.width, this.height)
}



if(this.type === 'wolfl'){
     
this.frameX = 0;
this.frameY = 1;
if (this.frameX > 2) this.frameX = 0;
else this.frameX++;

this.ctx.drawImage(this.image,this.frameX*145, this.frameY*65, 47,48, this.x + 800, this.y + 100, this.width, this.height)

}




if(this.type === 'bee'){
this.frameX = 0;
this.frameY = 1;    
 
if (this.frameX > 5) this.frameX = 0;
else this.frameX++;
this.ctx.drawImage(this.image,this.frameX, this.frameY, 71,71, this.x + 800, this.y +100, this.width, this.height)

}

// ctx1.fillStyle = "red";
// ctx1.fillRect(this.x, this.y, this.width, this.height)

}

update(){

    
    
    this.x += this.speed * this.gameSpeed;
    


    if(this.x > this.canvas1.width * this.width){

            this.x = 0 - this.width;

    }
}









}








export default Barrier;
