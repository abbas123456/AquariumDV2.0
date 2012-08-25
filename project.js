var width = window.innerWidth;
var height = window.innerHeight;

function Fish (width, height) {
    this.positionX= Math.floor(Math.random() * width);
    this.positionY = Math.floor(Math.random() * height);
    this.size = 15;
}

Fish.prototype.getPositionX = function() {
    return this.positionX;
};
Fish.prototype.setPositionX = function(positionX) {
    this.positionX = positionX;
};
Fish.prototype.getPositionY = function() {
    return this.positionY;
};
Fish.prototype.getSize = function() {
    return this.size;
};

var fish = new Array(20);
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