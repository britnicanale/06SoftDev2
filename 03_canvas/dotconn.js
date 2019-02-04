//Britni Canale & Cathy Cai -- Paint2.0
//SoftDev2 pd6
//K02 -- Connecting the Dots
//2019 - 02 - 01

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var radius = 0;
var growing = True;
var frame = NaN;

var clear = document.getElementById("clear");
clear.addEventListener('click',
  function(e){
    e.preventDefault();//in place to avoid default functionfrom event if there is a default
    ctx.clearRect(0,0,600,600);
    console.log(e);
  }
);

var drawDot = function(){
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.ellipse(300, 300, radius, radius, 0, 0, 2*Math.PI, true);
  ctx.fill();
  if(growing){
    radius = radius + 1;
  }else{
    radius = radius - 1;
  }
  if(radius == 300 || radius == 0){
    growing = !growing;
  }
  clear();
  frame = window.requestAnimationFrame(drawDot);
}

var stopButton = document.getElementById('stop');

var stopIt = function(){
  console.log(requestID);
  window.cancelAnimationFrame(frame);
}

stopButton.addEventListener('click', stopIt);
