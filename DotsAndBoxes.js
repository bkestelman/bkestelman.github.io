var c = document.getElementById("jscanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(250,250,125,0,2*Math.PI);
ctx.stroke();
