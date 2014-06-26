window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {


				ctx.globalAlpha = 1 //Default value


				// Create an array of rectangles

				var rects = [
					{x:20, y:20, width:75, height:75 },
					{x:40, y:50, width:75, height:75 },
					{x:150, y:20, width:75, height:75 },
					{x:170, y:50, width:75, height:75 },
					{x:280, y:20, width:75, height:75 },
					{x:300, y:50, width:75, height:75 },
					{x:410, y:20, width:75, height:75 },
					{x:430, y:50, width:75, height:75 },

				]


				//draw a series of rectangles
				for(var i=0; i<rects.length; i+=2){
					ctx.fillStyle = "Blue";
					ctx.fillRect(rects[i].x,rects[i].y,rects[i].width, rects[i].height);
					ctx.fillStyle = "red";
					ctx.fillRect(rects[i+1].x,rects[i+1].y,rects[i+1].width,rects[i+1].height);


					ctx.globalAlpha -= 0.3;


						}

		}
	}
}