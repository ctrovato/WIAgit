$(function() { 

	$('#right').click(function(){
		$('#theDiv').animate({width: "500px"}, 1000);
	});

	$('#text').click(function(){
		$('#theDiv').animate({fontSize: "24pt"}, 1000);
	});	

	$('#toggle').click(function(){
		$('#theDiv').animate({left: "500"}, 1000, "swing");
	});
 
});