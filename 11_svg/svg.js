//Britni Canale
//SoftDev2 Pd06
//K10 - Ask Circles [Change || Die]
//2019-03-13

var pic = document.getElementById("vimage");  //Getting SVG
var mov = document.getElementById("move");
var requestID = 0;
var dots = pic.childNodes
var acc = 1;

//==========================EVENT LISTENERS ===========================

//Clear Button!
var b = document.getElementById("clear");
b.addEventListener('click', function(e){
  e.preventDefault();
  clear();
});

mov.addEventListener('click',
  function(e){
    e.preventDefault();
    move()
});

var drop = document.getElementById("drop");
drop.addEventListener('click', function(e){
  e.preventDefault();
  console.log("DROP");
  fall()
});

var stop = document.getElementById("stop");
stop.addEventListener('click', function(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
  }
);


var addCirc = function(e){
  console.log("Circle")
  e.preventDefault()
  if (this.getAttribute("fill") == "blue"){
    console.log("circle is alrady blue")
    toGreen(this);
  }else{
    toRandom(this);
  }
}



//Adds dot with line connecting if svg is clicked
pic.addEventListener('click', function(e){
  e.preventDefault();
      //Offset gives difference of pixels between event point and reference point, which is upper left corner of the element in question, the canvas
      x = e.offsetX;
      y = e.offsetY;
      if(e.target['nodeName']=='circle'){
        return;
      }
      dot(x,y, 1, 1,'blue', false);
      console.log(e);
})

//========================== DRAW & CLEAR FUNCTIONS ==========================
var dot = function(x, y, xVel, yVel, color, dropping){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.addEventListener('click', addCirc)
  c.setAttribute("r", 10);
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("stroke", "black");
  c.setAttribute("fill", color);
  c.setAttribute("xVel", xVel);
  c.setAttribute("yVel", yVel);
  c.setAttribute("dropping", dropping)
  pic.appendChild(c);
  console.log("circle being added" + c)
  return c;
}

var fall = function(){
  window.cancelAnimationFrame(requestID);
  if(pic.hasChildNodes){
    dots = pic.childNodes;
    console.log(dots)
    window.cancelAnimationFrame(requestID);
    console.log("request ID: " + requestID);
    for(i = 0; i < dots.length; i++){
      console.log(dots[0])
      console.log("Falling!")
      let x = parseInt(dots[0].getAttribute('cx'))
      let y = parseInt(dots[0].getAttribute('cy'))
      let color = dots[0].getAttribute("fill")
      let dropping = dots[0].getAttribute("dropping");
      console.log("dropping? " + dropping);
      if( dropping == "false"){
        dots[0].setAttribute("yVel", 0);
        dots[0].setAttribute("dropping",true);
      }
      let yVel = parseInt(dots[0].getAttribute("yVel"));
      let xVel = parseInt(dots[0].getAttribute("xVel"));
      console.log("yVel: " + yVel);
      if ((y >= 490 || y <= 10) && !requestID == 0){ //checks for bounce
        yVel = yVel * -1; //reverses velocity
        y = 489
        dots[0].setAttribute("yVel", yVel);
        console.log("yVel: " + yVel);
        console.log("bounce y")
      }
      console.log("y: " +y)
      console.log("color: " +color)
      yVel = yVel + acc;
      console.log("acc: " +acc);
      y = y + yVel; //shows motion
      console.log("yVel: " + yVel);
      clearOne(dots[0])
      dot(x, y, xVel, yVel, color, true)
    }
    requestID = window.requestAnimationFrame(fall);
  }
}

var move = function(){
  window.cancelAnimationFrame(requestID);
  if(pic.hasChildNodes){
    dots = pic.childNodes;
    console.log(dots)
    window.cancelAnimationFrame(requestID);
    console.log("request ID: " + requestID);
    for(i = 0; i < dots.length; i++){
      if(dots[0].getAttribute("dropping") == "true"){
        dots[0].setAttribute("yVel", 1);
        dots[0].setAttribute("dropping", false);
      }
      console.log(dots[0])
      console.log("moving!")
      let x = parseInt(dots[0].getAttribute('cx'))
      let y = parseInt(dots[0].getAttribute('cy'))
      let color = dots[0].getAttribute("fill")
      let xVel = parseInt(dots[0].getAttribute("xVel"));
      let yVel = parseInt(dots[0].getAttribute("yVel"));
      console.log("xVel: " + xVel);
      console.log("yVel: " + yVel);
      if ((x >= 490 || x <= 10) && !requestID == 0){ //checks for bounce
        xVel = xVel * -1; //reverses velocity
        dots[0].setAttribute("xVel", xVel);
        console.log("xVel: " + xVel);
        console.log("bounce x")
      }
      if ((y >= 490 || y <= 10) && !requestID == 0){ //checks for bounce
        yVel = yVel * -1; //reverses velocity
        dots[0].setAttribute("yVel", yVel);
        console.log("yVel: " + yVel);
        console.log("bounce y")
      }
      console.log("x: " +x)
      console.log("y: " +y)
      console.log("color: " +color)
      x = x + xVel; //shows motion
      y = y + yVel; //shows motion
      console.log("xVel: " + xVel);
      console.log("yVel: " + yVel);
      clearOne(dots[0])
      dot(x, y, xVel, yVel, color, false)
    }/*
    if ((x >= pic.width - 10 || x <= 10) && !requestID == 0){ //checks for bounce
      xVel = xVel * -1; //reverses velocity
      console.log("bounce")
    }
    if ((y >= pic.height - 10 || y <= 10) && !requestID == 0){ //checks for bounce
      yVel = yVel * -1; //reverses velocity
      console.log("bounce")
    }
    x = x + xVel; //shows motion
    y = y + yVel; //shows motion

    console.log("x: " +x)
    console.log("y: " +y)
    console.log("color: " +color)*/
    //dot(x, y, color)
    requestID = window.requestAnimationFrame(move);
  }
}

var toGreen = function(c){
  console.log("in green")
  c.setAttribute("fill", "green");
}

var toRandom = function(c){
  let newX = 10 + Math.random() * 480;
  let newY = 10 + Math.random() * 480;
  c.setAttribute("cx", newX);
  c.setAttribute("cy", newY);
  c.setAttribute("fill", "blue");
}

var clear = function(){
  window.cancelAnimationFrame(requestID);
  while(pic.hasChildNodes()){
    pic.removeChild(pic.childNodes[pic.childNodes.length-1])
  }
}

var clearOne = function(c){
  if(pic.hasChildNodes()){
    pic.removeChild(c)
  }
}
