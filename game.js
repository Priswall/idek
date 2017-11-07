var gameState = "menu";
var buttons = [];

var Button = function(state, x, y, w, h, t, f){

  this.state = state;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.t = t;
  this.f = f;
  
  this.update = function(e){
  
    if(gameState === this.state){
    
      if(e.clientX > this.x && e.clientX < this.x + this.w && e.clientY > this.y && e.clientY < this.y + this.h){
        
        this.f();
        
      }
    
    }
    
  };
  
  this.show = function(){
  
    if(gameState === this.state){
    
      c.fillStyle = "rgba(255, 200, 55, 255)";
      c.fillRect(this.x, this.y, this.w, this.h);
      c.fillStyle = "black";
      c.textAlign = "center";
      c.fillText(this.text, this.x + (this.w / 2), this.y + (this.h / 2));
    
    }
    
  };

};

buttons.push(new Button("menu", canvas.width / 2, canvas.height / 2, 200, 75, "Play Game", function(){gameState = "lvl";}));

function Block(x, y, c){
  
  this.x = x;
  this.y = y;
  this.c = c;
  this.show = function(){
    
    blocks[0].draw(this.x, this.y, canvas.width/5, canvas.width/5);
    
  };
  
}

function Player(x, y){
  
  this.x = x;
  this.y = y;
  this.left = false;
  this.right = false;
  this.vel = 0;
  this.acc = 0.5;
  this.maxSpeed = 10;
  this.update = function(){
  
    if(this.right){
    
      this.vel += this.acc;
      if(this.vel > this.maxSpeed){
        this.vel = this.maxSpeed;
     }
     this.x += this.vel;
      
    }
  
    if(this.left){
    
      this.vel -= this.acc;
      if(this.vel < -this.maxSpeed){
        this.vel = -this.maxSpeed;
     }
     this.x += this.vel;
      
    }
  
    if(!this.right && !this.left && this.vel !== 0){
      
      if(this.vel < 0){
      
        this.vel += this.acc;
        this.x += this.vel;
        
      }
      
      if(this.vel > 0){
      
        this.vel -= this.acc;
        this.x += this.vel;
        
      }
      
    }
    
    if(this.x > (canvas.width / 10) * 9){
      
      this.x = (canvas.width / 10) * 9;
      
    }
    
    if(this.x < 0){
      
      this.x = 0;
      
    }
    
  };
  this.show = function(){
    
    blocks[10].draw(this.x, this.y, canvas.width/10, canvas.width/10);
    
  };
  
}
var player = new Player(canvas.width/2, canvas.height);

function keypress(e){

  if(e.keyCode === 65 || e.keyCode === 37){
    
    player.left = true;
    
  }
  if(e.keyCode === 68 || e.keyCode === 39){
    
    player.right = true;
    
  }
  
}

function keyrelease(e){

  if(e.keyCode === 65 || e.keyCode === 37){
    
    player.left = false;
    
  }
  if(e.keyCode === 68 || e.keyCode === 39){
    
    player.right = false;
    
  }
  
}

function buttonupdate(e){

  for(var i = 0; i < buttons.length; i++){
  
    buttons[i].update(e);
  
  }

}

function arrayloop(a){

   for(var i = 0; i < a.length; i++){
     
     a[i].show();
     
   }

}

function loop(){
  canvas.width = window.innerHeight;
  canvas.height = window.innerHeight;
  canvas.style.left = (window.innerWidth / 2) - (canvas.width / 2);
  c.fillStyle = "rgba(0, 255, 255, 0.1)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  arrayloop(buttons);
  player.update();
  player.show();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
window.addEventListener("keydown", keypress);
window.addEventListener("keyup", keyrelease);
window.addEventListener("click", buttonupdate);
