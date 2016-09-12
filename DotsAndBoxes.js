var c = document.getElementById("jscanvas");
var ctx = c.getContext("2d");

var N = 2; //number of dots

var Dot = function(x, y) {
  this.x = x;
  this.y = y;
}
Dot.prototype.draw = function() {
  ctx.fillStyle="#000000";
  ctx.beginPath();
  ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
  ctx.fill();
}

var dots = {};

for(var i = 0; i < N; i++) {
  dots[i] = new Dot(Math.random()*500, Math.random()*500);
  dots[i].draw();
}
