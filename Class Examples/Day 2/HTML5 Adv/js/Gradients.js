window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

					//create linear gradient
					var linGrd = ctx.createLinearGradient(20,20,20,280);

					//add color
					linGrd.addColorStop(0,"#f00"); //start with red at 0
					linGrd.addColorStop(0.5,"#00f");
					linGrd.addColorStop(1,"#0f0"); //finish with green

					//create a Rectangle to fill the gradient
					ctx.fillStyle= linGrd;
					ctx.fillRect(20,20,200,260);
					ctx.lineWidth= 3;
					ctx.strokeRect(20,20,200,260);

					//create radial gradient
					var radGrd = ctx.createRadialGradient(525,150,20,525,150,100);

					radGrd.addColorStop(0,"#f00");
					radGrd.addColorStop(0.5,"#00f");
					radGrd.addColorStop(1,"#0f0");

					ctx.fillStyle = radGrd;

					ctx.beginPath();
					ctx.arc(525,150,100,0,2*Math.PI);
					ctx.stroke();
					ctx.fill();









		}
	}
}