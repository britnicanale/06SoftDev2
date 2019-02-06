//Britni Canale & Cathy Cai -- BCCC
//SoftDev2 pd6
//K04 -- What is it saving the screen from?
//2019 - 02 - 06

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var circle = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");

var radius = 0;
var growing = true;
var requestID = 0;

var rectWidth = 100;
var rectHeight = 50;

var rectX = Math.floor(Math.random() * c.width-rectWidth);
var rectY = Math.floor(Math.random() * c.height-rectHeight);

var xVel = 1;
var yVel = 1;

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

var drawDvd = function(){
  clear();
  console.log(requestID)
  ctx.fillStyle = "#00ffff";
  ctx.beginPath();
  var dvd = new Image()
  dvd.src = "logo_dvd.jpg";
  ctx.drawImage(dvd, rectX, rectY, rectWidth, rectHeight);
  if (rectX == c.width - rectWidth || rectX == 0){
    xVel = xVel * -1;
  }
  if (rectY == c.height - rectHeight || rectY == 0){
    yVel = yVel * -1;
  }
  rectX = rectX + xVel;
  rectY = rectY + yVel;
  requestID = window.requestAnimationFrame(drawDvd);
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

dvdButton.addEventListener('click', function(e){
    drawDvd();
  }
);
