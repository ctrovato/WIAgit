$(function() { 

	$('#slideup').click(function(){
		$('#theDiv').slideUp(5000);
	});

	$('#slidedown').click(function(){
		$('#theDiv').slideDown("fast");
	});

	$('#toggle').click(function(){
		$('#theDiv').slideToggle("slow");
	});

});

