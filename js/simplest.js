var rootObj = {};
var pdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rootObj.pdata = pdata;

controlDiv = d3.select("#conrtols");
controlDiv.append("button")
  .attr("type", "button")
  .text("update")
  .on("click", filterData);

selectDIV = d3.select("#example1");

function visualize(pdata, toUpdate) {
  var divWithData = selectDIV.selectAll("p")
    .data(pdata, function (d) { return d; });

  divWithData.exit().remove();

  divWithData.enter()
    .append("p")
    .text(function(d) {
        return d;
    });
};

function isEven(n) {
  return n % 2 == 0;
}

function filterData() {
  var numBetween1and2 = Math.floor((Math.random() * 2) + 1);
  console.log("numBetween1and2: " + numBetween1and2);
  
  var filteredData = rootObj.pdata.filter(function (n) {
    return isEven(numBetween1and2) ? n % 2 === 0 : n % 2 !== 0;
  });
  
  visualize(filteredData, true);
};

visualize(rootObj.pdata, false);