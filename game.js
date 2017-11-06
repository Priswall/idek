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
var player = new Player(canvas.width/2, (canvas.height/10) * 9);

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

function loop(){
  canvas.width = window.innerHeight;
  canvas.height = window.innerHeight;
  canvas.style.left = (window.innerWidth / 2) - (canvas.width / 2);
  c.fillStyle = "rgba(255, 255, 255, 100)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.show();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
window.addEventListener("keydown", keypress);
window.addEventListener("keyup", keyrelease);
