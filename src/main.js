import App from './components/App.js';

/*document.getElementById('root').appendChild(App());*/

let playPause = document.getElementById("btnPlayPause");
btnPlayPause.addEventListener("click", function(){

let v = document.getElementsByTagName("audio")[0];
  let sound = false;
 if (!sound) {
   v.play();
   this.innerHTML = "pause";
   sound = true;
  }
 else {
   v.pause();
   this.innerHTML = "play";
   sound = false;
   }
})
