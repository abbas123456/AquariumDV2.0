var width = window.innerWidth;
var height = window.innerHeight;

var fish = new Array(1);
for (var i = 0; i < fish.length; i++) {
	fish[i] = new Fish(width, height);
}

var svg = d3.select("#tank")
			.append("svg").attr("width", width)
			.attr("height", height);


var circles = svg.selectAll("circle")
				 .data(fish)
				 .enter()
				 .append("circle")
				 .attr("fill", "steelblue");

circles.attr("cx", function(d, i) {return d.getPositionX();})
	   .attr("cy", function(d, i) {return d.getPositionY();})
	   .attr("r", function(d, i) {return d.getSize();})
  
d3.timer(function() {
	circles.transition()
		   .attr("cx", function (d,i) {d.setPositionX(d.getPositionX() + 10); return d.getPositionX();})
		   .delay(500);
});

$("svg").mousemove(function(event) {
	event.pageX;
	event.pageY;
});