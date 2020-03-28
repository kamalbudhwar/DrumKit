
var numberOfbuttons=document.querySelectorAll("button.drum").length;

// Detecting button press

for(var i=0; i<numberOfbuttons ;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
});
}

// Detecting keyboard press.

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
      case "w":
        var crashAudio=new Audio('sounds/crash.mp3');
        crashAudio.play();
        break;
      case "a":
        var kickAudio=new Audio('sounds/kick-bass.mp3');
        kickAudio.play();
        break;
      case "s":
        var snareAudio=new Audio('sounds/snare.mp3');
        snareAudio.play();
        break;
      case "d":
        var tom1Audio=new Audio('sounds/tom-1.mp3');
        tom1Audio.play();
        break;
      case "j":
        var tom2Audio=new Audio('sounds/tom-2.mp3');
        tom2Audio.play();
        break;
      case "k":
        var tom3Audio=new Audio('sounds/tom-3.mp3');
        tom3Audio.play();
        break;
      case "l":
        var tom4Audio=new Audio('sounds/tom-4.mp3');
        tom4Audio.play();
        break;
      default:
        console.log(key);
    }
 }

function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
