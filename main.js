"use strict";
//Base//
var canvas,
	canvasContext,
	lastFrame = new Date(),
	currentFrame,
	dt,
	mouseX,
	mouseY,
    eventHandler;

var slinky,
    g = 9.81,
    springConst = 50,
    dampingConst = 5,
    drag = 0.01;

window.onload = function(){
    canvas = document.getElementById('gameCanvas')
	canvasContext = canvas.getContext('2d');
    canvas.style.cursor = "crosshair";
	init();
}

function init(){
    //Initialize handlers
    eventHandler = new EventHandler();
    eventHandler.addEventListener('canvas', "contextmenu", handleRightClickUp, false);
    eventHandler.addEventListener('canvas', "mousedown", handleMouseDown, false);
    eventHandler.addEventListener('canvas', "mousemove", getMousePosition, false);

	//Initialize game objects
    slinky = new Slinky(canvas.width / 4, 50, 20, 1, 10, 10, springConst);

    //Enter main game loop
	main();
}

function main(){
	//Main loop

	//Time calculations
	currentFrame = new Date();
	dt = (currentFrame - lastFrame)/1000.0;
	lastFrame = currentFrame;

	//Updates
	update(dt);
	draw(dt);

	requestAnimationFrame(main);
}


function draw(dt){
	drawBackground();
    drawSlinky();
}

function drawBackground(){
	canvasContext.fillStyle = 'Black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(circle){
	canvasContext.fillStyle = circle.color;
	canvasContext.beginPath();
	canvasContext.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	canvasContext.fill();

}

function drawSlinky(){
    for (var i = 0; i < slinky.length; i++){
        drawCircle(slinky.links[i]);
    }
}

function update(dt){
    slinky.update(dt);
}
