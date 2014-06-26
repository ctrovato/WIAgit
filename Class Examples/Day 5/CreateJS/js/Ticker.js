window.onload = function() {


	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//Create a red rectangle
	var shape = new createjs.Shape();

	//Fill
	shape.graphics.beginFill("red").drawRect(0,0,100,100);

	//Draw out the rectanlge
	shape.graphics.rect(0,0, 100, 100);

	//Change its registeration point
	shape.regX = 0;
	shape.regY= 0;

	//Move the rect to (100,100)
	shape.x = 100;
	shape.y = 100;

	stage.addChild(shape);


	//Set the frame rate for an animation using a class of ticker
	//access this by calling createjs.Ticker
	//Provides a heartbeat for the animation to follow
	//Default - 20 fps
	//Listeners subsribe to this "tick"  and do something with it

	//Set a frame rate per second

	createjs.Ticker.setFPS(40);

	// Add an event listener

	createjs.Ticker.addEventListener("tick", tick);


	//create a function called tick to do "something"

	function tick(){
		   //this will be called 30 x per second

		   shape.rotation +=8;
		   //any transforms

			// shape.alpha -=.01

			//Move the square
			// shape.x +=5;
			//shape.y +=5;
			// shape.scaleX +=.1;
			// shape.scaleY += .1;



		   stage.update();

		}






}