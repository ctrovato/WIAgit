window.onload = function() {

	//First we canvas and stage

	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//Create a shape
	var shape = new createjs.Shape();
	var shape2 = new createjs.Shape();
	//beginStroke() give it a color
	shape.graphics.beginStroke("purple");
	shape2.graphics.beginStroke("green");

	// Set stroke styles
	// Takes 1-4 values as arguements
	//Line width in px
	shape.graphics.setStrokeStyle(10);
	shape2.graphics.setStrokeStyle(10);

	// setStrokeStyle(thickness, caps, joints, miter)
	// Caps  - 0 - butt, 1-round, 2-square
	//joints 0-miter, 1-round, 2-bevel
	//miter is a #
	shape.graphics.setStrokeStyle(10, "round", 0, 1);
	shape2.graphics.setStrokeStyle(20, "round", 0, 1);







	//starting point
	//moveTo()
	shape.graphics.moveTo(25, 25);
	shape2.graphics.moveTo(50, 50);

	//Draw a straight line
	shape.graphics.lineTo(250, 25);
	shape2.graphics.lineTo(200, 15);
	//Move to 50,50 and then a quad curve
	shape.graphics.moveTo(50,50);
	shape2.graphics.moveTo(70,70);

	//quad curve    quadraticCurveTo(cpx, cpy, x, y);
	//shape.graphics.quadraticCurveTo(50,175, 250, 250);

	// Arc To - arcTo(x1, y1, x2, y2, radius)
	//shape.graphics.arcTo(100, 50, 100, 200, 60);

	//Bezier Curve
	//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

	shape.graphics.bezierCurveTo(100, 50, 100, 200, 250, 250);
	shape.graphics.lineTo(50, 250);

	shape2.graphics.bezierCurveTo(100, 50, 100, 200, 250, 250);
	shape2.graphics.lineTo(60, 275);

	//Close the path
	// .closePath()
	//shape.graphics.closePath();


	//Add to stage's display list
	stage.addChild(shape);
	stage.addChild(shape2);

	stage.update();


}