let buttonColours = ["red", "blue", "green", "magenta"];

let gamePattern = [];

let userClickedPattern = [];

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio('sounds/' + randomChosenColor + '.mp3');
  audio.play();
}
//

$(".btn").click(function(){
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  });

console.log(userClickedPattern);
