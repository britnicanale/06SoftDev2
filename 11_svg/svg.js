//Britni Canale
//SoftDev2 Pd06
//K10 - Ask Circles [Change || Die]
//2019-03-13

var pic = document.getElementById("vimage");  //Getting SVG
var mov = document.getElementById("move");
var xVel = 1;
var yVel = 1;
var requestID = 0;

//==========================EVENT LISTENERS ===========================

//Clear Button!
var b = document.getElementById("clear");
b.addEventListener('click',
  function(e){
    e.preventDefault();//in place to avoid default functionfrom event if there is a default
    clear()
    console.log(e);
  }
);

mov.addEventListener('click',
  function(e){
    e.preventDefault();
    if(pic.hasChildNodes()){
      dots = pic.childNodes;
      console.log(dots)
      for( i = 0; i < dots.length; i++){
        let cx = parseInt(dots[i].getAttribute('cx'));
        let cy = parseInt(dots[i].getAttribute('cy'));
        let color = dots[i].getAttribute('fill')
        console.log(cx)
        console.log(color)
        move(cx, cy, color)
      }
    }
    console.log(e);
  }

)

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
  console.log(c)
}

var move = function(x, y, color){
  console.log(x)
  clear();
  window.cancelAnimationFrame(requestID);
  console.log(requestID);
  if ((x >= pic.width - 10 || x <= pic.width + 10) && !requestID == 0){ //checks for bounce
    xVel = xVel * -1; //reverses velocity
    console.log("bounce")
  }
  if ((y == pic.height - 10 || y <= pic.width + 10) && !requestID == 0){ //checks for bounce
    yVel = yVel * -1; //reverses velocity
    console.log("bounce")
  }
  x = x + xVel; //shows motion
  y = y + yVel; //shows motion
  console.log(x)
  console.log(y)
  console.log(color)
  dot(x, y, color)
  requestID = window.requestAnimationFrame(move(x, y, color));
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
