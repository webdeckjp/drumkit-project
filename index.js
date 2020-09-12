//select drum button elements on page
buttons = document.querySelectorAll(".drum");

//attach event listener to drum buttons
for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        playSound("tom-1");
        break;
      case "a":
        playSound("tom-2");
        break;
      case "s":
        playSound("tom-3");
        break;
      case "d":
        playSound("tom-4");
        break;
      case "j":
        playSound("snare");
        break;
      case "k":
        playSound("crash");
        break;
      case "l":
        playSound("kick-bass");
        break;
      default:
        console.log("Error");
        break;
    }
    animateKey(this.innerHTML);
  });
}

//attach event listener to keyboard keys
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "w":
      playSound("tom-1");
      break;
    case "a":
      playSound("tom-2");
      break;
    case "s":
      playSound("tom-3");
      break;
    case "d":
      playSound("tom-4");
      break;
    case "j":
      playSound("snare");
      break;
    case "k":
      playSound("crash");
      break;
    case "l":
      playSound("kick-bass");
      break;
    default:
      console.log("Error");
      break;
  }

  animateKey(e.key);
});

//play sound function, hoisted
function playSound(drumKey) {
  var audio = new Audio(`./sounds/${drumKey}.mp3`);
  audio.play();
}

//animate key
function animateKey(currentKey) {
  //function
  let animatedKey = document.querySelector(`.${currentKey}`);
  animatedKey.classList.add("pressed");
  setTimeout(function () {
    animatedKey.classList.remove("pressed");
  }, 100);
}
