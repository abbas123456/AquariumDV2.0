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