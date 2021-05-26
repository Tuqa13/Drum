for (var i =0; i<document.querySelectorAll(".drum").length ;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        clickCheck(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
  });


}
document.addEventListener("keypress", function(event){
  clickCheck(event.key);
  buttonAnimation(event.key);
});


function clickCheck(key){

  switch (key) {
    case "w":
        AudioPlay("sounds/crash.mp3");
        break;

    case "a":
        AudioPlay("sounds/kick-bass.mp3");
        break;

    case "s":
        AudioPlay("sounds/snare.mp3");
        break;

    case "d":
        AudioPlay("sounds/tom-1.mp3");
        break;

    case "j":
        AudioPlay("sounds/tom-2.mp3");
        break;

    case "k":
        AudioPlay("sounds/tom-3.mp3");
        break;

    case "l":
        AudioPlay("sounds/tom-4.mp3");
        break;

    default: console.log("buttonInnerHTML");

  }
}

function AudioPlay(fileLocation){
  var audio = new Audio(fileLocation);
  audio.play();
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed"); }, 200);
}
