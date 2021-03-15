var gameStartBtn = document.querySelector("#startGame");
var resetScoreBtn = document.querySelector("resetScore")
var timer = 0

function gameStart () {
    gameStartBtn.addEventListener('click', function(){ //anonymous function
        alert ('start the game already!');
    })
}

function resetScore (){

}

function int () {
    gameStart();
    resetScore();
}

init();
