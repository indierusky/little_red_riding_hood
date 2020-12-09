class Barrier {
constructor(x, y, width, height, speed, type){

this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.speed = speed;
this.type = type;

}


draw(){

ctx1.fillStyle = "red";
ctx1.fillRect(this.x, this.y, this.width, this.height)

}

update(){

    this.x += this.speed * gameSpeed;

    if(this.x > canvas1.width * this.width){

            this.x = 0 - this.width;

    }
}









}


function initBarriers(){

for(let i = 0; i < 2; i++){

let x = i * 350;

wolvesArray.push( new Barrier(x, canvas1.height-unit *2 - 20, unit, unit, 1, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 300;

wolvesArray.push( new Barrier(x, canvas1.height-unit *3 - 20, unit *2, unit, -2, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 350;

wolvesArray.push( new Barrier(x, canvas1.height-unit *4 - 20, unit, unit, 2, 'wolf'))


}

for(let i = 0; i < 2; i++){

let x = i * 400;

barriersArray.push( new Barrier(x, canvas1.height-unit *5 - 20, unit * 2, unit, -2, 'tree'))


}

for(let i = 0; i < 3; i++){

let x = i * 200;

barriersArray.push( new Barrier(x, canvas1.height-unit *6 - 20, unit * 2, unit, 1, 'tree'))


}


}

initBarriers();


function handleBarriers() {

for(let i=0; i < wolvesArray.length; i++){

        wolvesArray[i].update();
        wolvesArray[i].draw();

}

for(let i=0; i < barriersArray.length; i++){

        barriersArray[i].update();
        barriersArray[i].draw();

}

}
