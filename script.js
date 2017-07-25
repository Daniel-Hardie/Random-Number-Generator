var number;
var userGuess;
var guessRemain = 10;
var win = false;
var $inputBox = $('#box1');
var $counter = $('#counter');
var $feedback = $('#feedback');
var $guessButton = $('#button1');

//immediately generate random number
generateNumber();

$guessButton.on("click", main);

function main(){
  //$(".button").on("click", function(){
    //$(this).toggleClass('active');
    //$(this).text('Projects Viewed');

    //make sure game has not been won already
    if(!win){
      userGuess = parseInt($inputBox.val());
      console.log(userGuess);
      //check to make sure guess is a number
      if(isNaN(userGuess)){
        $feedback.html("Please enter a valid number between 1 and 100");
      }
      else{
        userGuess = Math.floor(userGuess);
        decreaseGuess();
      }

      if(userGuess < 1 || userGuess > 100){
        $feedback.html("Please enter a valid number between 1 and 100");
      }
    }
    //else{
    //  $inputBox.val("");
    //}
  //});
}

//this is called upon clicking "Guess" button
function decreaseGuess(){
  //ensures there are still guesses remaining
  if(guessRemain > 1){
    guessRemain--;
    $('#counter').html("Guesses remaining: " + guessRemain);
  }
  //user is at zero guesses so loses
  else{
    $counter.html("Guesses remaining: 0" );
    $feedback.html("You've lost the game! The number was: " + number);
    win = false;
  }

}

//generates a random number and prints in console
function generateNumber(){
  number = Math.floor(Math.random()*100)+1;
  console.log(number);
}
//$(document).ready(main);
