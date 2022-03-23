document.getElementById("file").addEventListener("change", loadFile)
  function loadFile() {
  let image = document.getElementById("imageUser");
  image.src = window.URL.createObjectURL(event.target.files[0]); 
  //base64
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onload = () => {
        // console.log( reader.result);
         localStorage.setItem("imageUser", reader.result);
   }
  reader.readAsDataURL(file);
 }

 document.getElementById("buton-aceptar").addEventListener("click",capturaInfo)
  function capturaInfo(){
  let nameUser = document.getElementById("input-user").value
  localStorage.setItem("user", nameUser);
}

let sound
document.getElementById("btnPlayPauseTwo").addEventListener("click", playPause)
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

}
