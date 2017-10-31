function loop(){
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.strokeText("Working!", 50, 50);
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
