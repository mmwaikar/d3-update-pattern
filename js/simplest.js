var rootObj = {};
var pdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// always keep a copy of the main data
rootObj.pdata = pdata;

controlDiv = d3.select("#conrtols");
controlDiv.append("button")
  .attr("type", "button")
  .text("update")
  .on("click", filterData);

selectDIV = d3.select("#example1");

function visualize(pdata) {
  // The function passed to the d3.data function produces
  // keys for the function. If this function is not passed
  // then the index (0..n-1) is assumed to be the key
  var divWithData = selectDIV.selectAll("p")
    .data(pdata, function (d) { return d; });

  // this is called for each data item which is not in pdata
  divWithData.exit().remove();

  // new items appear which are in pdata
  divWithData.enter()
    .append("p")
    .text(function(d) { return d; });
};

function isEven(n) {
  return n % 2 == 0;
}

function filterData() {
  var numBetween1and2 = Math.floor((Math.random() * 2) + 1);
  var isNumEven = isEven(numBetween1and2);
  var isNumEvenString = isNumEven ? "even" : "odd";
  console.log("numBetween1and2:(" + numBetween1and2 + ") which is " + isNumEvenString + ", hence showing " + isNumEvenString + " data");
  
  // filter the data from the main data
  var filteredData = rootObj.pdata.filter(function (n) {
    return isNumEven ? isEven(n) : !isEven(n);
  });
  
  visualize(filteredData);
};

visualize(rootObj.pdata);