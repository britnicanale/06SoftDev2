//Britni Canale & Cathy Cai -- Paint2.0
//SoftDev2 pd6
//K03 -- They lock us in the tower whenever we get caught... which is often.
//2019 - 02 - 05

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var circle = document.getElementById("circle");
var stopButton = document.getElementById("stop");

var radius = 0;
var growing = true;
var requestID = 0;

var clear = function(e){
  ctx.clearRect(0,0,600,600);
  // console.log(e);
};

var drawDot = function(){
  clear();
  console.log(requestID)
  ctx.fillStyle = "#00ffff";
  ctx.beginPath();
  ctx.ellipse(c.width / 2, c.height / 2, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if(growing){
    radius = radius + 1;
  }else{
    radius = radius - 1;
  }
  if(radius == c.width / 2 || radius == 0){
    growing = !growing;
  }
  requestID = window.requestAnimationFrame(drawDot);
  // console.log(frame)
};

circle.addEventListener("click", function (e){
  if (requestID != 0){
    e.preventDefault();
  }
  else{
    drawDot();
  }
}
);

var stopIt = function(){
  window.cancelAnimationFrame(requestID);
  requestID = 0;
};

stopButton.addEventListener("click", function (e){
  stopIt();
}
);
