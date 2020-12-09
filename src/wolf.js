class Wolf{

constructor(){
this.spritewidth = 576;
this.spriteheight = 384;
this.width = 48;
this.height = 48;

this.x = canvas.width/2 - this.width/2;
this.y = canvas.height - this.height - 40;

this.moving = false;
this.frameX = 0;
this.frameY = 0;



}


draw(){

    ctx3.fillStyle = "brown";
    ctx3.fillRect(this.x,  this.y, this.width, this.height);
}






}

const badWolf = new Wolf();