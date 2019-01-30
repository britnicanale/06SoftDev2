var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var b = document.getElementByTagName("button");
b.addEventListener('click',
  function(e){
    //ctx.clearRect();
  console.log(e)
  }
);

c.addEventListener('click',
  function(e){
    ctx.fillRect(e.clientX, e.clientY, 50,50);
    console.log(e.clientX)
    console.log(e)
  }
);
