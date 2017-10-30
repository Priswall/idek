var canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

var blocks = [];

function resizeWindow(){
  if(window.innerHeight > window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
  }else{
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;
  }
}


function Sprite(x, y, w, h){

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.draw = function(x, y){
    c.drawImage(this.y, this.y, this.w, this.h, x, y, this.w, this.h);
  };
  
}


var img = new Image();
img.onload = initSprites(this);
img.src = "res/sprites.png";

function initSprites(img){
  
  for(var i = 0; i < img.width/10; i++){
  
    blocks[i] = new Sprite(i * 10, i%4, 10, 10);
    
  }
  
}

var script = document.createElement('script');
script.src = "js/game.js";
script.async = true;
document.body.appendChild(script);

window.addEventListener("resize", resizeWindow);
