window.onload = function() {


		if(!createjs.Sound.initializeDefaultPlugins()){return;}

						createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});


						createjs.Sound.addEventListener("fileload",handFileLoad);

						function handelFileLoad(event){

							console.log("Preloaded:",event.src);
							createjs.Sound.play(event.src);
						}
}

					function playMusic(){
						console.log("going to play");
						createjs.Sound.play("soundId");
}
