let buttonColours = ["red", "blue", "green", "magenta"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function() {

  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  $("#" + userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(userChosenColour);

  });

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {

  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();

}
