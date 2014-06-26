google.load("visualization", "1", {packages:["corechart"]});

//once the libs are loaded, run the function
google.setOnLoadCallback(drawChart);

function drawChart(){
			//create data tabble using array
			var data = google.visualization.arrayToDataTable([
						["SODA","Harmfull Ingredients"],
						["Work", 8],
						["Eat", 2],
						["Commute", 2],
						["Watch TV", 2],
						["Sleep", 7]
				]);

			var options = {
							title: 'SODA',
							pieHole: 0.4,
							pieSliceText: 'label',
							pieStartAngle: 100,
							legend: {position: "labeled"},
							tooltip: {trigger: "none"}

			};

			//create the chart variable & location to where it goes

			var chart = new google.visualization.PieChart(document.getElementById('piechart'));

			//draw chart
			chart.draw(data, options);

}