var canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

function resizeWindow(){
  if(window.innerHeight > window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
  }else{
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;
  }
};

window.addEventListener("resize", resizeWindow);
