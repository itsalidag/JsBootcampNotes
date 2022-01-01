var buttonColours = ["red", "yellow", "blue","green"];
var gamePattern = [];
var level = 0;
var userClickedPattern = [];
var started = false;



$(".btn").on("click", function(){
    var selected = $(this).attr("id");
    userClickedPattern.push(selected);
    playSound(selected);
    animatePress(selected);
    checkAnswer(userClickedPattern.length-1);

})

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();
    $("#level-title").text("Level "+level)
    level+=1;
};


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
};

$(document).on("keydown", function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }})
    

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            
            },1000)
        };
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
    
          startOver();
    }

};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  };
  