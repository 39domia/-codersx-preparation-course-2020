function Cat(){
    this.stomach = [];
}
Cat.prototype.eat(mouse) = function(mouse){
    this.stomach.push(mouse);
}

module.exports = Cat;