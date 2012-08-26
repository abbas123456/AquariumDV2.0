function Fish (width, height) {
    this.position= V3.$(Math.floor(Math.random() * width), Math.floor(Math.random() * height), 0);
    this.velocity = V3.$(1,1,0);
    this.size = 15;
    this.maximumSpeed = 0.05;
}

Fish.prototype.getPosition = function() {
    return this.position;
};
Fish.prototype.getSize = function() {
    return this.size;
};
Fish.prototype.move = function(target) {
	V3.sub(target, this.position, this.velocity);
	V3.scale(this.velocity, this.maximumSpeed, this.velocity);
	V3.add(this.position, this.velocity, this.position);
};