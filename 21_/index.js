d3.csv("https://raw.githubusercontent.com/britnicanale/06SoftDev2/master/21_/schooldata.csv", function(data){
  console.log(data['DBN'])
  console.log(typeof data)
  var schooldata = [];
  var x;
  for(x in  data){
    console.log(x)
    schooldata+= data[x];
  }
  console.log(schooldata)
  console.log(typeof schooldata)
  const result = schooldata.filter(school => school["total_enrollment"] > 100 );
  console.log(result);
})
