//import App from './components/App.js';

//document.getElementById('root').appendChild(App());

let sound
const btnPlayPause = document.getElementById("btnPlayPause");
btnPlayPause.addEventListener("click", function playPause(){
  let v = document.getElementsByTagName("audio")[0];
   if (!sound) {
     v.play();
    sound = true;
    }
   else {
    v.pause();
    sound = false;
   }
})
