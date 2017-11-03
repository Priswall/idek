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


function Sprite(img, x, y, w, h){

  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.draw = function(x, y, w, h){
    c.drawImage(this.img, this.y, this.y, this.w, this.h, x, y, w, h);
  };
  
}


var img = new Image();
img.onload = function(){initSprites(this);};
img.src = "res/sprites.png";

function initSprites(img){
  
  blocks = [
  
     new Sprite(img, 0, 0, 10, 10),
     new Sprite(img, 10, 0, 10, 10),
     new Sprite(img, 20, 0, 10, 10),
     new Sprite(img, 30, 0, 10, 10),
     new Sprite(img, 0, 10, 10, 10),
     new Sprite(img, 10, 10, 10, 10),
     new Sprite(img, 20, 10, 10, 10),
     new Sprite(img, 30, 10, 10, 10),
     new Sprite(img, 0, 20, 10, 10),
     new Sprite(img, 10, 20, 10, 10),
     new Sprite(img, 20, 20, 10, 10)
  
  ];
  
}

var script = document.createElement('script');
script.src = "game.js";
script.async = true;
document.body.appendChild(script);

window.addEventListener("resize", resizeWindow);
