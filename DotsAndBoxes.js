var canvas = document.getElementById("jscanvas");
var context = canvas.getContext("2d");

var N = 2; //number of dots

var Dot = function(x, y) {
  this.x = x;
  this.y = y;
}
Dot.prototype.draw = function() {
  context.fillStyle="#000000";
  context.beginPath();
  context.arc(this.x, this.y, 10, 0, Math.PI*2);
  context.fill();
}
Dot.prototype.drawBoxes = function() {
  context.rect(0, 0, this.x, canvas.height);
  context.stroke();
}

var dots = {};

for(var i = 0; i < N; i++) {
  dots[i] = new Dot(Math.random()*500, Math.random()*500);
  dots[i].draw();
}

for(var i = 0; i < N; i++) {
  dots[i].drawBoxes();
}

function getNum(){ 
  var num = ['1', '2', '3', '4', '5'];
  var selected = num[Math.floor(Math.random() * num.length)];
  var history = selected;

  if(history){

  }
  
  return selected;
}

$('button').click(function(){
  console.log(getNum());
})
