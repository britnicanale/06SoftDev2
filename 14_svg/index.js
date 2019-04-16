var array = [42];

var selection = d3.select("body");

d3.selectAll("h2");

d3.selectAll("tr").selectAll("td");

d3.selectAll("tr").selectAll("td").selectAll("span");

d3.selectAll("section");

d3.selectAll("section").append("p");

d3.selectAll("section").select("aside");

document.body.__data__ = 42;

d3.select("body").datum(42);

d3.select("body").datum(42).append("h1");

//-----------------------------

var numbers = [4, 5, 18, 23, 42];

var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];


var matrix = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15]
];



//-----------------------

var numbers = [4, 5, 18, 23, 42];
d3.selectAll("div").data(numbers);


//------------------------

var vowels = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];

function name(d) {
  return d.name;
}

d3.selectAll("div").data(letters, name);
var div = d3.selectAll("div").data(vowels, name);
div.exit();
div.enter();
