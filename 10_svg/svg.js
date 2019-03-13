//Britni Canale
//SoftDev2 Pd06
//K09 - Connect the Dots ...
//2019-03-12

var pic = document.getElementById("vimage");  //Getting SVG


//Clear Button!
var b = document.getElementById("clear");
b.addEventListener('click',
  function(e){
    e.preventDefault();//in place to avoid default functionfrom event if there is a default
    clear()
    console.log(e);
  }
);

var circles = document.getElementsByTagName("circle");
for(i = 0; i < circles.length; i++){
  circles[i].addEventListener('click',
    function(e){
      if (circles[i].getAttribute("fill") == "blue"){
        circles[i].setAttribute("fill", "green");
      }else{
        circles[i].setAttribute("x", Math.random() * 500);
        circles[i].setAttribute("x", Math.random() * 500);
      }
    }
  );
}

//Adds dot with line connecting if svg is clicked
pic.addEventListener('click', function(e){
  e.preventDefault();
      //Offset gives difference of pixels between event point and reference point, which is upper left corner of the element in question, the canvas
      var x = e.offsetX;
      var y = e.offsetY;
      dot(x,y);
      console.log(e);
})

//=================== DRAW & CLEAR FUNCTIONS =====================
var dot = function(x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "blue");
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
