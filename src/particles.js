class Particle {

constructor(x,y){
this.x = x;
this.y = y;
this.radius = Math.random() * 20 + 1;
this.opacity = 1;
this.directX = Math.random() * 1 - 0.5;
this.directY = Math.random() * 1 - 0.5;


}

draw() {
ctx3.fillStyle = `rgba(150,150,150,1)`;
ctx3.beginPath();
ctx3.arc(this.x, this.y, this.radius, 0, Math.PI *2);
ctx3.fill();
ctx3.closePath();

}

update(){

    this.x += this.directX;
    this.y += this.directY;
}

}


function handleParticles(){
for(let i =0; i < particlesArray.length; i++ ){

    particlesArray[i].update();
    particlesArray[i].draw();
}


if(((keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'])) && characters[0].y > 100 && particlesArray.length < 200 ){

    for(let i=0; i < particlesArray.length; i++){
            particlesArray.unshift(new Particle(characters[0].x, characters[0].y));


    }
}
    
}
