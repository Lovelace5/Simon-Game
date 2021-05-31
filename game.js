let buttonColours = ["red", "blue", "green", "magenta"];

let gamePattern = [];

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColours[randomNumber];


  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColor);

  let audio = new Audio('sounds/' + randomChosenColor + '.mp3');
  audio.play();
}
