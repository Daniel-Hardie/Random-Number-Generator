var number;
var userGuess;
var guessRemain = 10;
var guesses =  document.getElementById("counter");
var $numBox = $('#box');
var $counter = $('#counter');

function main(){
  $(".button").on("click", function(){
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');

  });
}

function decreaseGuess(){
  guessRemain--;
  $('#counter').html("Guesses remaining: " + guessRemain);
  console.log(guessRemain);

}

$(document).ready(main);
