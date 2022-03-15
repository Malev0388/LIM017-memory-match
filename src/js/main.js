//import App from './components/App.js';

//document.getElementById('root').appendChild(App());

let sound
document.getElementById("btnPlayPause").addEventListener("click", playPause)
function playPause(){

    let v = document.getElementsByTagName("audio")[0];

   if (!sound) {
     v.play();
      //this.innerHTML = "pause";
    sound = true;
    }

   else {
    v.pause();
    //this.innerHTML = "play";
    sound = false;
   }

};

  /*let icon = document.getElementById("btnicons")
   icon.classList.remove("iconPlay")
   icon.classList.add("iconPause")*/
