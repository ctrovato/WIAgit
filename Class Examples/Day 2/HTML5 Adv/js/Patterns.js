window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

	// 				//create a pattern from an imag
	// var patImg = new Image();

	// 			//once the image loads - use onload function

	// 			patImg.onload= function(){
	// 				ctx.fillStyle=ctx.createPattern(patImg, "repeat");
	// 				ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
	// 			}

	// 			patImg.src="images/desert_desc_bug.gif";


		var patCanvas = document.getElementById('patCan');
		var patCtx = patCanvas.getContext('2d');


		patCtx.strokeStyle= "red";
		patCtx.lineWidth= 1;
		patCtx.beginPath();
		patCtx.moveTo(0,0);
		patCtx.lineTo(25,25);
		patCtx.stroke();


		var strokePat = ctx.createPattern(patCanvas, "repeat");
		ctx.strokeStyle= strokePat;
		ctx.lineWidth= 25;
		ctx.strokeRect(50,50,200,200);




		}
	}
}