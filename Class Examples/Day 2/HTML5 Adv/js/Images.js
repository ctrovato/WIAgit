window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

	//variableto hold the image
	var srcImg = document.getElementById("img1");

	//draw image diectly onto canvas
	//ctx.drawImage(srcImg, 0,0);

	//scaled down onto the canvas
	// ctx.drawImage(srcImg, 50,50,350,150);

	//draw portion of image
	// ctx.drawImage(srcImg, 350,200,125,100,50,50,125,100);


	// draw a video on Canvas

	var srcVid = document.getElementById("vid1");
	srcVid.play(0);
	setInterval(function(){
				var theCanvas = document.getElementById('Canvas1');
				var ctx = theCanvas.getContext('2d');
				var srcVid = document.getElementById('vid1');
				ctx.drawImage(srcVid, 0,0);

	},10)













		}
	}
}