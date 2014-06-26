window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

					ctx.save();
					ctx.fillStyle="blue";
					ctx.fillRect(150,30,100,50);

					ctx.rotate(.5);
					ctx.fillRect(150,30,100,50);
					ctx.restore();



					// ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2,);

					var radian = (Math.PI / 180) * 20;

					for(var degrees = 0; degrees < 360; degrees+=20){
									ctx.beginPath();
									ctx.moveTo(0,0);
									ctx.lineTo(100,0);
									ctx.stroke();
									ctx.rotate(radian);
					}



		}
	}
}