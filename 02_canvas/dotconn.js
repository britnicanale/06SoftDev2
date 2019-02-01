//Britni Canale & Jabir Chowdhury -- Paint2.0
//SoftDev2 pd6
//K02 -- Connecting the Dots
//2019 - 02 - 01

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var prevx = NaN;
var prevy = NaN;

var b = document.getElementById("clear");
b.addEventListener('click',
  function(e){
    e.preventDefault();//in place to avoid default functionfrom event if there is a default
    ctx.clearRect(0,0,600,600);
    prevx = NaN;
    prevy = NaN;
    console.log(e);
  }
);

c.addEventListener('click',
  function(e){
    e.preventDefault();
    //Offset gives difference of pixels between event point and reference point, which is upper left corner of the element in question, the canvas
    var x = e.offsetX;
    var y = e.offsetY;
    if(isNaN(prevx)){
      dot(x,y);
    }else{
      draw(prevx, prevy, x, y);
      dot(x,y);
      dot(prevx, prevy);
    }
    prevx = x;
    prevy = y;
    console.log(e);
  }
);

var dot = function(x, y){
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.ellipse(x, y, 3,3, 0, 0, 2*Math.PI, true);
  ctx.fill();
}

var draw = function(prevx, prevy, x, y){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.moveTo(prevx, prevy);
  ctx.lineTo(x, y);
  ctx.stroke();
}
