function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

}

Circle.prototype.isOverlapped = function (cir2) {
    var OOx = ((cir2.x - this.x) * (cir2.x - this.x)) + ((cir2.y - this.y) * (cir2.y - this.y));
    var cOOx = Math.sqrt(OOx);
    var absRRx = Math.abs(this.radius - cir2.radius)
    if (absRRx < cOOx && cOOx < (this.radius + cir2.radius)) {
        return 2;
    }
    if (cOOx === absRRx || cOOx === this.radius + cir2.radius) {
        return 0;
    }
    if (cOOx > this.radius + cir2.radius) {

        return -1;
    }
    if (cOOx === 0) {
        return -1;
    }
}

module.exports = Circle;