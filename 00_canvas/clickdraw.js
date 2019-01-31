var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var b = document.getElementById("clear");
b.addEventListener('click',
  function(e){
    ctx.clearRect(0,0,600,600);
  console.log(e)
  }
);

var shape = "dot";


c.addEventListener('click',
  function(e){
    if(shape == "dot"){
      ctx.beginPath();
      ctx.ellipse(e.clientX, e.clientY, 30,30, 0, 0, 2*Math.PI, true);
      ctx.fill();
    }else{
      ctx.fillRect(e.clientX, e.clientY, 10,10);
    }
    console.log(e)
  }
);

var s = document.getElementById("shape");
s.addEventListener('click',
  function(e){
    if(shape == "box"){
      shape = "dot";
      s.innerHTML = "Rectangle"
    }else{
      shape = "box";
      s.innerHTML = "Dot"
    }
  }
);
