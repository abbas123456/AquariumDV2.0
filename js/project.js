var width = window.innerWidth;
var height = window.innerHeight;
var target = V3.$(0,0,0);

var shoal = new Array(1);
for (var i = 0; i < shoal.length; i++) {
	shoal[i] = new Fish(width, height);
}

var tank = d3.select("#tank")
			.append("svg")
			.attr("width", width)
			.attr("height", height);


var fish = tank.selectAll("fish")
				 .data(shoal)
				 .enter()
				 .append("circle")
				 .attr("fill", "steelblue");

fish.attr("cx", function(d, i) {return d.getPosition()[0];})
	.attr("cy", function(d, i) {return d.getPosition()[1];})
	.attr("r", function(d, i) {return d.getSize();})
  
d3.timer(function() {
	for (var i = 0; i < shoal.length; i++) {
		shoal[i].move(target);
	}
	fish.attr("cx", function (d,i) {return d.getPosition()[0];});
	fish.attr("cy", function (d,i) {return d.getPosition()[1];});
});

$("svg").mousemove(function(event) {
	target = V3.$(event.pageX, event.pageY, 0);
});