let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColours[nextSequence()];
  gamePattern.push(randomChosenColor);
  return gamePattern;
}
