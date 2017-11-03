function loop(){
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  blocks[10].draw(50, 50, canvas.width/10, canvas.width/10);
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
