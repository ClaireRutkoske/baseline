

// body transition	
d3.select("body")
.transition()
.delay(500)
.styleTween("background-color", function(){ return d3.interpolate("green", "red"); });
	
	
	
// data

var dataset = "../../lib/data/data.tsv";


var width = window.innerWidth-200,
    height = window.innerHeight,
	barHeight = 50;

var x = d3.scale.linear()
	.range([0, width]);

var chart = d3.select("#test")
	.attr("width", width);

d3.tsv(dataset, type, function (error,data) {
	x.domain([0,d3.max(data, function(d){return d.value;})]);
	
	chart.attr("height", barHeight * data.length);

	var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i) {return "translate(0," + i * barHeight + ")";});

	bar.append("rect")
	.attr("width", function (d) {return x(d.value);})
	.attr("height", barHeight - 5);

	bar.append("text")
	.attr("x", function(d) {return x(d.value) - 5;})
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d){ return d.name + ": " + d.value;});
	
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}


