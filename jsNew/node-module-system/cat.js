
function Cat(){
    this.stomach = [];

};
Cat.prototype.eat = function(eatMouse){
    this.stomach.push(eatMouse);
    eatMouse.die();
    return this;
};
module.exports = Cat;