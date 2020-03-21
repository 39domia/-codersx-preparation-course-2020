function Mouse(color){
    this.color = color;
    this.dead = false;
};
Mouse.prototype.die = function(){
    return this.dead = true;
};
module.exports = Mouse;