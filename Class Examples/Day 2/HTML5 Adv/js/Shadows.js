window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

				var origShadowColor = ctx.shadowColor;
				ctx.save();

				//shadow settings
				ctx.shadowColor = "#000000";
				ctx.shadowOffsetX = 10;
				ctx.shadowOffsetY = 10;
				ctx.shadowBlur = 10;

				//draw rectangle with a shadow effect
				ctx.fillStyle = "rgba(0,0,255,1)";
				ctx.fillRect (20,20,200,100);

				var theString = "Draawing Text on a Canvas";

				//draw string with font information
				//change the shadow

				ctx.fillStyle = "green";
				ctx.origShadowColor = "rgba(0,100,100,0.5)";
				ctx.shadowOffsetX = 5;
				ctx.shadowOffsetY = 5;
				ctx.shadowBlur = 5;
				ctx.font= "25pt Georgia";
				ctx.fillText(theString, 250,75);

				//draw line with purple shadow
				ctx.lineCap = "round";
				ctx.lineWidth = 25;
				ctx.shadowColor = "rgba(150,0,150,0.5)";
				ctx.shadowOffsetX = 5;
				ctx.shadowOffsetY = 5;
				ctx.strokeStyle = "red";
				ctx.beginPath();
				ctx.moveTo(50,200);
				ctx.lineTo(450,200);
				ctx.stroke();

				//Reset back to NO shadow
				ctx.shadowColor = origShadowColor;
				ctx.restore;
				ctx.fillStyle ="rgba(0,0,255,1)";
				ctx.fillRect(20,255,200,50);







		}
	}
}