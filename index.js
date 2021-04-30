//adds event listener to window for keys that match drum key, then plays sound.
window.addEventListener("keydown", playSound);


//function to play animate button element when related key is pressed
function playSound(evt) {

  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  //plays audio with corresponding key
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
  //identifies HTML button with .key, applies then removes flash animation


  if (!audio) return;
  audio.currentTime = 0; //allows for multiple key presses
  audio.play();

  key.classList.add("playing"); // adds flash

}

//removes .playing from keys
function removeTransition(evt) {

  if (evt.propertyName !== "transform") return; //skip if property name is not transform
  this.classList.remove("playing");

}


//selects all keys to add event listener that removes flash when detected
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
