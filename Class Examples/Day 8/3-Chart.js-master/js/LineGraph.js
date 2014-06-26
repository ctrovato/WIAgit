$(function() {
	var canvas= document.getElementById("canvas");
	var ctx =canvas.getContext("2d");


				var lineChartData = {
					labels: ["January","February", "March", "April", "May", "June", "July"],
					datasets: [

					{
								fillColor:'rgba(166,209,122,0.5)',
								strokeColor:'rgba(166,209,122,1)',
								pointColor:'rgba(166,209,122,1)',
								poiintStrokeColor:'#fff',
								data:[1,20,40,20,60,75,40]

					},
			 	{

								fillColor:'rgba(242,140,185,0.5)',
								strokeColor:'rgba(242,140,185,1)',
								pointColor:'rgba(242,140,185,1)',
								poiintStrokeColor:'#fff',
								data:[15,30,45,60,30,60,75]
						}
					]
				}

				var options = {
								//BezierCurve  false;
								onAnimationComplete: done
				};

				var myLine = new Chart(ctx).Line(lineChartData, options);

				function done(){
								var dataURL = canvas.toDataURL();
								console.log(dataURL);

								//set the canvas image src to dataURL, so it can bee saved as an image

								document.getElementById('canvasImg').src=toDataURL;

								$('#canvas').hide

				}


});