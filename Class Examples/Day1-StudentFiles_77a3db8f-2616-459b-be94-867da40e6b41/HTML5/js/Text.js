window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

					var theString="Drawing Text on a Canvas";

					// ctx.fillText(theString, 20, 20);

					ctx.font = "25pt Georgia";
					ctx.textBaseline ="middle";
					ctx.fillText(theString, 20, 20);

					ctx.fillStyle = "blue";
					ctx.strokeStyle = "rgba(0,255,0,0.8)";

					ctx.fillText (theString, 20, 100);




		}
	}
}