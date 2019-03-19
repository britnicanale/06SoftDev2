//Britni Canale
//SoftDev2 Pd06
//K10 - Ask Circles [Change || Die]
//2019-03-13

var pic = document.getElementById("vimage");  //Getting SVG
var mov = document.getElementById("move");
var xVel = 1;
var yVel = 1;
var requestID = 0;
var dots = pic.childNodes

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
    if(pic.hasChildNodes()){
      //dots = pic.childNodes;
      console.log("circles: " + dots)
      move()
      /*for( i = 0; i < dots.length; i++){
        let cx = parseInt(dots[i].getAttribute('cx'));
        let cy = parseInt(dots[i].getAttribute('cy'));
        let color = dots[i].getAttribute('fill')
        console.log("cx: " +cx)
        console.log("color: " +color)
        move()
      }*/
    }
    console.log(e);
  }

)

var stop = document.getElementById("stop");
stop.addEventListener('click', function(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
  }
);


var addCirc = function(c){
  c.addEventListener('click',
    function(e){
      console.log("Circle")
      e.preventDefault()
      if (c.getAttribute("fill") == "blue"){
        console.log("circle is alrady blue")
        toGreen(c);
      }else{
        toRandom(c);
      }
    }
  );
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
      dot(x,y, 'blue');
      console.log(e);
})

//========================== DRAW & CLEAR FUNCTIONS ==========================
var dot = function(x, y, color){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  addCirc(c)
  c.setAttribute("r", 10);
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("stroke", "black");
  c.setAttribute("fill", color);
  pic.appendChild(c);
  console.log("circle being added" + c)
  return c;
}

var move = function(){
  dots = pic.childNodes;
  console.log(dots)
  window.cancelAnimationFrame(requestID);
  console.log("request ID: " + requestID);
  for(i = 0; i < dots.length; i++){
    console.log(dots[0])
    console.log("moving!")
    let x = parseInt(dots[0].getAttribute('cx'))
    let y = parseInt(dots[0].getAttribute('cy'))
    let color = dots[0].getAttribute("fill")
    if ((x >= 490 || x <= 10) && !requestID == 0){ //checks for bounce
      xVel = xVel * -1; //reverses velocity
      console.log("bounce")
    }
    if ((y >= 490 || y <= 10) && !requestID == 0){ //checks for bounce
      yVel = yVel * -1; //reverses velocity
      console.log("bounce")
    }
    console.log("x: " +x)
    console.log("y: " +y)
    console.log("color: " +color)
    x = x + xVel; //shows motion
    y = y + yVel; //shows motion
    clearOne(dots[0])
    dot(x, y, color)
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
