var mouse = {
    weight: 0.2,
    getWeight: function(){
        return this.weight;
    }
}
// console.log(mouse.getWeight())
function Mouse(color){
    this.type = 'mouse';
    this.color = color;
}
var mouse1 = new Mouse('black');
var mouse2 = new Mouse('brown');
// console.log(mouse1);
// console.log(mouse2);
var tom = {
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse)
        return this;
    }
}
tom.eat(mouse1).eat(mouse2)
console.log(tom)