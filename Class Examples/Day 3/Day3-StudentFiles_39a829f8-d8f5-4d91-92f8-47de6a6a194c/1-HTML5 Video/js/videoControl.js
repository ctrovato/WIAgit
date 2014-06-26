

	window.onload = function() {

    var vid=document.getElementById("vid");

}


function clicked(){

    vid.currentTime+=2;


}

function pauseToggle(){

    if(vid.paused){

        vid.play();

    }else{
        vid.pause();


    }

}

