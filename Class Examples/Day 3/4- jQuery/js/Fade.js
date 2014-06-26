$(function() { 

	$('#fadein').click(function(){
		$('#theDiv').fadeIn("normal");
	});

	$('#fadeout').click(function(){
		$('#theDiv').fadeOut("fast");
	});

	$('#fadeto3').click(function(){
		$('#theDiv').fadeTo("slow", 0.3);
	});

	$('#fadeup').click(function(){
		$('#theDiv').fadeTo("slow", 1.0);
	});
            
});