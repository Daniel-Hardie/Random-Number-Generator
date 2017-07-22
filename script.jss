var number;
var userGuess;
var $numBox = $('#numbox');

function main(){
  $(".button").on("click", function(){
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
}

$(document).ready(main);
