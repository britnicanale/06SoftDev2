//Britni Canale & Cathy Cai -- BCCC
//SoftDev2 pd6
//K04 -- What is it saving the screen from?
//2019 - 02 - 06

//BUTTONS, getting elements from html file

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var circle = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");

//Animaniac state variables

var radius = 0; //initial radius
var growing = true; //shows whether or not the circle is growing
var requestID = 0; //initial requestID

//DVD state variables

var rectWidth = 100; //height of image
var rectHeight = 50; //width of image

var rectX;
var rectY;

console.log(rectX + "," + rectY)
console.log(c.width);

var xVel = 1;
var yVel = 1;

var dvd;


//Clear function
var clear = function(e){
  ctx.clearRect(0,0,600,600);
  // console.log(e);
};

//Animaniach function
var drawDot = function(){
  clear();
  window.cancelAnimationFrame(requestID);
  console.log(requestID);
  ctx.fillStyle = "#00ffff";
  ctx.beginPath();
  ctx.ellipse(c.width / 2, c.height / 2, radius, radius, Math.PI / 4, 0, 2 * Math.PI); //draws circle in center of canvas
  ctx.stroke();
  ctx.fill();
  if(growing){ //motion based on state vairable
    radius = radius + 1;
  }else{
    radius = radius - 1;
  }
  if(radius == c.width / 2 || radius == 0){ //changes to shrinking or growing when it hits the boundaries
    growing = !growing;
  }
  requestID = window.requestAnimationFrame(drawDot);
  // console.log(frame)
};

var drawDvd = function(){
  clear();
  window.cancelAnimationFrame(requestID);
  console.log(requestID);
  ctx.beginPath();
  var dvd = new Image()
  dvd.src = "logo_dvd.jpg";
  //ctx.fillRect(rectX- 1, rectY-1, rectWidth+2, rectHeight+2); //for testing
  ctx.drawImage(dvd, rectX, rectY, rectWidth, rectHeight);
  if ((rectX == c.width - rectWidth || rectX == 0) && !requestID == 0){ //checks for bounce
    xVel = xVel * -1; //reverses velocity
  }
  if ((rectY == c.height - rectHeight || rectY == 0) && !requestID == 0){ //checks for bounce
    yVel = yVel * -1; //reverses velocity
  }
  rectX = rectX + xVel; //shows motion
  rectY = rectY + yVel; //shows motion
  requestID = window.requestAnimationFrame(drawDvd); //animates
  // console.log(frame)
};

circle.addEventListener("click", function (e){
  console.log(requestID);
  if (requestID != 0 && !dvd){
    e.preventDefault();
  }
  else{
    dvd = false;
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
  console.log(requestID);
  rectX = Math.floor(Math.random() * (c.width-rectWidth));
  rectY = Math.floor(Math.random() * (c.height-rectHeight));
  if (requestID != 0 && dvd){
    e.preventDefault();
  }
  else{
    dvd = true;
    drawDvd();
  }
}
);
