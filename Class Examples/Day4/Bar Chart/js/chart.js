var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var heightestYlabel = 0;
var valueMultiplier = 0;


// create DocReady Function

$(document).ready(function(){
		window.chartHeight = Number($(".chart-area").height());
		window.barWidth = $(".chart-area .chart-bar").width();
		window.heightestYlabel = Number($(".chart-y-axis p").first().html());
		window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());
		window.chartScale = chartHeightArea/window.heightestYlabel;
		window.barSpacing = Number($(".chart-area").attr("bar-spacing"));

		positionBars();

});


function positionBars(){
	// function to position the bars

		$(".chart-area .chart-bar").each(function(index){
						var barPosition = (window.barWidth * index) + (window.barSpacing * index) + window.barSpacing;
						$(this).css("left", barPosition + "px");

		//add text to Bar and x-axis

		$(this).html("<p>"+$(this).attr("bar-value")+"</p>");

		//x-axis
		$('.chart-x-axis').append('<p style="left:'+(barPosition - (window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

		//relative to the height of the bars

		var barValue = Number($(this).attr("bar-value"));

		if(barValue > window.maxValue){
						window.maxValue = barValue;
						window.valueMultiplier = window.maxValue/window.heightestYlabel;

		}
});

		animateChart();

}

// function to animate chart

function animateChart(){
//get each bar to animate to its correct height

	$(".chart-area .chart-bar").each(function(index){
		//height relative to the chart height

		var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;
		//create variable for delay
		var newDelay = 125*index;

		//animate bar

		$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
			//fade in <p> tags
			$(this).children("p").delay(500).fadeIn(250);
		});
	});

}


function turkeyUpdate(){
			$('.chart-area .chart-bar').each(function(index){
			if(index == 0){
				var revisedValue = $('#turkeyForm option:selected').val() * window.chartScale;
				$(this).html('<p>'+$('#turkeyForm option:selected').val()+'</p>')

			}else{
				var revisedValue = Number($(this).attr('bar-value')) * window.chartScale;

			}

			var newDelay = 125*index;

			$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
				$(this).children('p').delay(500).fadeIn(250);
			});

	});

}
