window.addEventListener("keydown", function(e){

  keys[e.code] = true;
  characters[0].moving = true;

  
});


window.addEventListener("keyup", function(e){

delete keys[e.code];
characters[0].moving = false;
 

});


function scores(){

score++;
gameSpeed += 0.5;
character[0].x = canvas.width/2 - character[0].width/2;
character[0].y = canvas.height - character[0].height-40;

}






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
  ctx1.clearRect(0, 0, canvas.width, canvas1.height);
    ctx1.drawImage(background, 100, 100, canvas1.width, canvas1.height);
    handleParticles();
    characters[0].draw();
    // characters[0].update();

    characters[0].movePlayer();
    characters[0].handlePlayerFrame();
    // handleBarriers();
    // wolf.draw();
    // wolf.update();


}



}

startAnimating(30);


