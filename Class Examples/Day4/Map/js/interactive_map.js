$(document).ready(function() {

$('#mapForm').change(function(){

	var selectedContinent = $('#mapForm option:selected').val();

//if statment test if all, then shows all dotts
if(selectedContinent == "ALL"){
	//show all dots
$('a.dot').slideDown(1000);

}else{
	//show the dotts that are selected
$('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
$('a.dot[continent !="'+selectedContinent+'"]').slideUp(1000);

}


})



//dot code
//when dot is clicked

$('a.dot').click(function(){
	//remove selected class from dots
	$('a.dot').removeClass("selected");

	//Add selected Class on clicked anchor

	$(this).addClass("selected");

	//create variable to hold the path of the matching div

	var country = ".country_detail#"+$(this).attr("country");

	//create var to hold the html code
	var htmlCode = $(country).html();

	//animate container

$(".detail_container").fadeOut(500, function(){
	//the container is hidden
	//put the html contianer and then fade up

	$(".detail_container .country_detail").html(htmlCode);
	$(".detail_container").fadeIn(500);

})

})


});