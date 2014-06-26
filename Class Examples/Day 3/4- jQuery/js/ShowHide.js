$(function() { 

	$('#show').click(function(){
		$('#theDiv').show(5000, function(){
			alert("Div is now done being shown");
			$("#theDiv").css("background-color", "red");
		});
	});

	$('#hide').click(function(){
		$('#theDiv').hide("fast");
	});

	$('#toggle').click(function(){
		$('#theDiv').toggle("slow");
	});



});