class Particle {

constructor(ctx,x,y){
this.x = x + 25;
this.y = y + 80 ;
this.radius = Math.random() * 20 + 1;
this.opacity = .5;
this.directX = Math.random() * 1 - 0.5;
this.directY = Math.random() * 1 - 0.5;
this.ctx1 = ctx;


}

draw() {
this.ctx1.fillStyle = 'rgba(255,128,0,' + this.opacity + ')';
this.ctx1.beginPath();
this.ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
this.ctx1.fill();
this.ctx1.closePath();

}

update(){

    this.x += this.directX;
    this.y += this.directY;

    if(this.opacity > .1){

        this.opacity -= .4;
    }

    if(this.radius > .15){

        this.radius -= .14;
    }
}

}


export default Particle;
    




