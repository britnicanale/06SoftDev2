//Britni Canale
//SoftDev2 Pd06
//K09 - Connect the Dots ...
//2019-03-12

var pic = document.getElementById("vimage");  //Getting SVG


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
      var x = e.offsetX;
      var y = e.offsetY;
      dot(x,y, e);
      console.log(e);
})

//========================== DRAW & CLEAR FUNCTIONS ==========================
var dot = function(x, y, e){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  addCirc(c)
  if(e.target['nodeName']=='circle'){
    return;
  }
  c.setAttribute("r", 10);
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("stroke", "black");
  c.setAttribute("fill", "blue");
  pic.appendChild(c);
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
  var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  c.setAttribute("width", 500);
  c.setAttribute("height", 500);
  c.setAttribute("x", 0);
  c.setAttribute("y", 0);
  c.setAttribute("fill", "white");
  c.setAttribute("stroke", "white");

  pic.appendChild(c);
}
