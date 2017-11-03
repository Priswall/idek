function loop(){
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  blocks[10].draw(50, 50, canvas.width/10, canvas.width/10);
  window.requestAnimationFrame(loop);
}

function Block(x, y, c){
  
  this.x = x;
  this.y = y;
  this.c = c;
  this.show = function(){
    
    blocks[0].draw(this.x, this.y, canvas.width/5, canvas.width/5);
    
  };
  
};

function Player(x, y){
  
  this.x = x;
  this.y = y;
  this.vel = 0;
  this.acc = 0.2;
  this.maxSpeed = 3;
  this.show = function(){
    
    blocks[10].draw(this.x, this.y, canvas.width/5, canvas.width/5);
    
  };
  
};
var player = new Player(canvas.width/2, (canvas.height/6)*5);

function keypress(e){

  if(e.keyCode === 65 || e.keyCode === 37){
  
    player.vel += player.acc;
    if(player.vel > player.maxSpeed){
      player.vel = player.maxSpeed;
    }
    player.x += player.vel;
    
  }
  if(e.keyCode === 68 || e.keyCode === 39){
  
    player.vel -= player.acc;
    if(player.vel < -player.maxSpeed){
      player.vel = -player.maxSpeed;
    }
    player.x -= player.vel;
    
  }
  
};

function keyrelease(e){

  if(e.keyCode === 65 || e.keyCode === 37 && player.vel > 0){
  
    player.vel -= player.acc;
    player.x -= player.vel;
    
  }
  if(e.keyCode === 68 || e.keyCode === 39 && player.vel < 0){
  
    player.vel += player.acc;
    player.x += player.vel;
    
  }
  
};

window.requestAnimationFrame(loop);
window.addEventListener("keydown", keypress);
window.addEventListener("keyup", keyrelease);
