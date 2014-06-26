window.onload = function() {

    if(!createjs.Sound.initializeDefaultPlugins()){return;}


    var audioPath="audio/";


    var manifest=[
    {id:"Music", src:audioPath+"music.mp3|" +audioPath+"music.ogg"},
    {id:"Thunder", src:audioPath+"Thunder1.mp3|" +audioPath+"Thunder1.ogg"}
];

createjs.Sound.addEventListener("fileload", handleLoad);

createjs.Sound.registerManifest(manifest);


}



function handleLoad(event){
    createjs.Sound.play(event.src);
}

function playMusic(){
    console.log("going to play");
    createjs.Sound.play("Music");
}

function playThunder(){
    console.log("going to play");
    createjs.Sound.play("Thunder");
}

