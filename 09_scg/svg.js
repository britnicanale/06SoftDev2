//Britni Canale
//SoftDev2 Pd06
//K09 - Connect the Dots ...
//2019-03-12

var pic = document.getElementById("vimage");  //Getting SVG


//declaring prevx & prevy to not be assigned yet
var prevx = NaN;
var prevy = NaN;

//Clear Button!
var b = document.getElementById("clear");
b.addEventListener('click',
  function(e){
    e.preventDefault();//in place to avoid default functionfrom event if there is a default
    clear()
    prevx = NaN;
    prevy = NaN;
    console.log(e);
  }
);




//Adds dot with line connecting if svg is clicked
pic.addEventListener('click', function(e){
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
})

//=================== DRAW & CLEAR FUNCTIONS =====================
var dot = function(x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 3);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
}

var draw = function(prevx, prevy, x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "line");
  c.setAttribute("x1", prevx);
  c.setAttribute("y1", prevy);
  c.setAttribute("x2", x);
  c.setAttribute("y2", y);
  c.setAttribute("stroke", "black");

  pic.appendChild(c);
}

var clear = function(){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  c.setAttribute("width", 500);
  c.setAttribute("height", 500);
  c.setAttribute("x", 0);
  c.setAttribute("y", 0);
  c.setAttribute("fill", "white");
  c.setAttribute("stroke", "white");

  pic.appendChild(c);
}
