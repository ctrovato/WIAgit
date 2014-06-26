window.onload = function() {

	var canvas = document.getElementById('canvas');

	var stage = new createjs.Stage(canvas);

	var ship = new createjs.Bitmap("images/ship.png");

	var centerX = canvas.width/2;
	var centerY = canvas.height/2;


	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;


	stage.addChild(ship);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", tick);


	function tick(){

			// ship.x = centerX + Math.random()*25;
			// ship.y = centery + Math.random()*5;

			// //wave motion
			// ship.x = centerX + Math.sin(3);


			// //ticker function
			// ship.x = centerX + Math.sin(createjs.Ticker.getTicks());


			//go in circles
			ship.x = centerX + (Math.sin(createjs.Ticker.getTicks()/2)*50);
			ship.y = centerY + (Math.cos(createjs.Ticker.getTicks()/2)*50);

			stage.update();
	}


}