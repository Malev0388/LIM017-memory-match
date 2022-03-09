import App from './components/App.js';

/*document.getElementById('root').appendChild(App());*/

let playPause = document.getElementById("musicStart")
playPause.addEventListener("click",() => {
  let count = 0;

  function playPause() {
    if (count==0){
      count=1;
      audio.play();
    }else{
      count=0;
      audio.pause();
    }
  }
