

// body transition	
d3.select("body")
.transition()
.delay(1000)
.styleTween("background-color", function(){ return d3.interpolate("green", "red"); });
	
	
	
// circles

// (function() {
//
// function dance() {
//   var circle = d3.selectAll("#circle-dance circle"),
//       span = d3.selectAll(".circle-dance-x"),
//       data = d3.range(3).map(function() { return Math.random() * 720; });
//
//   circle.data(data).attr("cx", function(d) { return d; });
//   span.data(data).text(function(d) { return d; });
// }
//
// dance();
// setInterval(dance, 2500);
//
// })();



var circles = d3.select(".circles")
.attr("width", 720)
.attr("height", 120);


var dancingCircles = function() {
	
	var data = d3.range(3).map(function() { return Math.random() * 720; });
	
	circles.selectAll("circle")
	.data(data)
	.enter().append("circle")
	.attr("cy", 60)
	.attr("cx", function(d){ return d; })
	.attr("r", function(d) { return Math.sqrt(d); });
	
	console.log("Run")
	
}

dancingCircles();
setInterval(dancingCircles, 1000);

	
	
	
	
// test

var dataset = "../../lib/data/data.tsv";


var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
	.rangeRoundBands([0,width], .5);
	
var y = d3.scale.linear()
	.range([height, 0]);
	
var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
	
var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");


var chart = d3.select("#test")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

d3.tsv(dataset, type, function (error,data) {
	
	x.domain(data.map(function(d){return d.name;}));
	y.domain([0,d3.max(data, function(d){return d.value; }) ]);
	
	chart.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);
	
	chart.append("g")
	.attr("class", "y axis")
	.call(yAxis);
	
	chart.selectAll(".bar")
	.data(data)
	.enter().append("rect")
	.attr("class", "bar")
	.attr("x", function(d) { return x(d.name); })
	.attr("y", function(d) { return y(d.value); })
	.attr("height", function(d) { return height - y(d.value) ; })
	.attr("width", x.rangeBand());
	
	chart.selectAll(".text")
	.data(data)
	.enter().append("text")
	.attr("text-anchor", "middle")
	.text(function(d) { return d.value;})
	.attr("x", function(d, i) { return (i * (860/data.length)) + margin.right; })
	.attr("y", function(d) { return y(d.value) - 5; })
	;

	console.log ();
	
	
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}


