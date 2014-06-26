window.onload = function() {


	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);


	//Shape
	var shape = new createjs.Shape();

	//Stroke Style
	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(5, 1, 1);

	//drawPolyStart(x,y, radius, sides, pointSize(0-1), angle)
	shape.graphics.drawPolyStar(75,75,50, 5, .75, 0); //5 Pointed star

	// draw the outer ring
	shape.graphics.drawCircle(75,75, 50);


	//Starburst
	shape.graphics.drawPolyStar(325, 75, 50, 10, 1, 0);

	//Polygon
	shape.graphics.drawPolyStar(450, 75, 50, 10, 0, 0 );

	//Triangle
	shape.graphics.drawPolyStar(180, 75, 50, 3, 0, 0);

	//Rotate the trangle when drawn
	shape.graphics.drawPolyStar(650, 75, 50, 3, 0, -90);



	// Create a new shape
	var shape2 = new createjs.Shape();

	//Create a red filled triangle
	shape2.graphics.beginFill("red");
	shape2.graphics.drawPolyStar(200,250, 50, 3, 0, -90);
	stage.addChild(shape2);


	 //Lets add listener for a click
	 //.addEventListener() or .on()
	 shape2.addEventListener("click", function(event){

			console.log("Triangle is clicked!");

		 });


	stage.addChild(shape);
	stage.update();
}