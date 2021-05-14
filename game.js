let buttonColours = ["red", "blue", "green", "magenta"];

let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColor = buttonColours[nextSequence()];

// $("#magenta").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
gamePattern.push(randomChosenColor);
