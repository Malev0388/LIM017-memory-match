const btnPlayPause = document.getElementById("btnPlayPause");
let audio = document.getElementsByTagName("audio")[0];
let sound;

btnPlayPause.addEventListener("click", 
function playPause(){
   if (!sound) {
     audio.play();
    sound = true;
    }
   else {
    audio.pause();
    sound = false;
   }
})
