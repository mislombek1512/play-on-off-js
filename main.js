let image = document.querySelector("img");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  if (image.getAttribute("src") == "image/off.png") {
    image.src = "image/on.png";
    playOn();
    button.innerHTML = "Off";
  } else {
    image.src = "image/off.png";
    playoff();
    button.innerHTML = "On";
  }
});

let playOn = () => new Audio("audio/on.mp3").play();
let playoff = () => new Audio("audio/off.mp3").play();
