var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

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
img.onload = function(){initSprites(this);};
img.src = "res/sprites.png";

function initSprites(img){
  
  blocks = [
  
     new Sprite(0, 0, 10, 10),
     new Sprite(10, 0, 10, 10),
     new Sprite(20, 0, 10, 10),
     new Sprite(30, 0, 10, 10),
     new Sprite(0, 10, 10, 10),
     new Sprite(10, 10, 10, 10),
     new Sprite(20, 10, 10, 10),
     new Sprite(30, 10, 10, 10),
     new Sprite(0, 20, 10, 10),
     new Sprite(10, 20, 10, 10),
     new Sprite(20, 20, 10, 10)
  
  ];
  
}

var script = document.createElement('script');
script.src = "js/game.js";
script.async = true;
document.body.appendChild(script);

window.addEventListener("resize", resizeWindow);
