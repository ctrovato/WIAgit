window.onload = function() {

    $('.lightbox_trigger').click(function(e){
        //prevent default

        e.preventDefault();
        //get the clicked href

        var image_href=$(this).attr('href');

        if($('#lightbox').length >0 ){
           //place href as image value
           $('#content').html('<img src="' + image_href +'"/>');

        //show lightbox window - you could use .show(for a fast transition)
        $('#lightbox').show();
           }else{

        //create html markup for lightbox window

        var lightbox=
            '<div id="lightbox">' +
            '<p> Click to close </p>' +
            '<div id="content">' +
            '<img src="' + image_href +'"/>' +
            '</div>' +
            '</div>';

        //insert lightbox html into page

        $('body').append(lightbox);
    }
    });

//click anywhere to get rid of window
$('#lightbox').live('click',function(){
    $('#lightbox').hide();
});


}