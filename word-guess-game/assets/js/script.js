var gameStartBtn = document.querySelector('#startGame');
var resetScoreBtn = document.querySelector('#resetScore');
var gameTimer = document.querySelector('#timer');
var textAreaText = document.querySelector('#textAreaText')
var timerInterval = 1000;
var timerCount = 10;
var counter;
var randomWord = '';
var dictionary = ['variable', 'boolean', 'object', 'array'];


function gameStart() {
  
  
  // Add event listener for when the game starts
  gameStartBtn.addEventListener('click', function() {
  
    // Reset the timer
    timerCount = 10;
    // Update the time shown 
    updateTimer();
    
    // Pick a random word 
    var randomIndex = Math.floor(Math.random() * dictionary.length);
    randomWord = dictionary[randomIndex];
    console.log(randomWord);

    //generate word area
    textAreaText.textContent = (randomWord);
    //create array from randomWord
    var textAreaTextKey = randomWord.split('');
    console.log(textAreaTextKey)

   

    // start a set interval to countdown to zero from the timerCount
    counter = setInterval(function() {
      // decrement the timerCOunt
      timerCount--;
      // If the timer count is zero, stop the counter
      if(timerCount === 0) {
        clearInterval(counter);
        alert('Game Over')
      }
      // Update the time shown remaining on the page
      updateTimer();
    }, timerInterval)
  })

  document.addEventListener("keydown", keydownAction)

}

function keydownAction(event) {
  console.log(event);
var keyPress = event.key;
  console.log(keyPress);

  if (keyPress === textAreaTextKey[0])
  console.log("pressed");
 //if (keyPress = TextAreaTextKey)
  
  //event listener that displays array value on keydown
  //if ()
  //textAreaTextKey.setAttribute('style', 'display: block');
}

function resetScore() {
  resetScoreBtn.addEventListener('click', function() {
    alert('I give up!');
    //needs to also reset wins and losses
  })
}

function updateTimer() {
  gameTimer.textContent = timerCount;
}

function init() {
  gameStart();
  resetScore();
  updateTimer();
}

init();