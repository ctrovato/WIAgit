(function(){
    console.log("started");
    var canvas = document.getElementById("canvas"); 
    var ctx = canvas.getContext("2d"); //gain access to the canvas API
    var stage = new createjs.Stage(canvas);
    var deck = [];
    var highBtn = document.querySelector("#high");
    var lowBtn = document.querySelector("#low");
    var output = document.querySelector("#message");
    var guess="";
    var cardSprite;
    var message="";
    var currentCard;
    highBtn.addEventListener("click",onHigh);
    lowBtn.addEventListener("click",onLow);
    var img = new Image();
    img.src = "./spritesheet/allcards.jpg";
    img.addEventListener("load",init);

    function init(){
        console.log("image loaded");
        for (var suit=0;suit<4;suit++){
            for (var value=1;value<14;value++){  //ace = 1;
                var v=value;
                if (v==1){v=14} //for aces only
                deck.push([suit,v,value+(suit*13)-1]);
            }
        }
        var data = {
            images: ["./spritesheet/allcards.jpg"],
            frames: {width:242, height:331}
        };
        var spriteSheet = new createjs.SpriteSheet(data);
        cardSprite=new createjs.Sprite(spriteSheet);
        cardSprite.x=50;
        cardSprite.y=50;
        stage.addChild(cardSprite);
        currentCard = dealCard();
		console.log(currentCard[2]);
        cardSprite.gotoAndStop(currentCard[2]);
        stage.update();
    }

    function onHigh(e){
        guess = "high";
        var oldCardValue = currentCard[1];
        updateCard();
        checkResult(oldCardValue);
    }

    function onLow(e){
        guess = "low";
        var oldCardValue = currentCard[1];
        updateCard();
        checkResult(oldCardValue);
    }

    function checkResult(v){
        if (v==currentCard[1]){
            message = "Tie!! Try again";
        } else if (guess=="high"){
            if (v<currentCard[1]){
                message = "Correct! Try Again";
            } else
            {
                message = "Incorrect. The card was lower. Try again";
            }
        } else if (guess=="low"){
            console.log("low",v,currentCard[1]);
            if (v>currentCard[1]){
                message = "Correct. Try again";
            } else
            {
                message = "Incorrect. The card was higher. Try again";
            }
        }
        output.innerHTML = message;
    }

    function dealCard(){
        var pick = ~~(Math.random()*deck.length);
        var card = deck[pick];
        deck.splice(pick,1);
        return card;
    }

    function updateCard(){
        currentCard = dealCard();
        cardSprite.gotoAndStop(currentCard[2]);
        stage.update();
    }
})();