var Mouse = require('./aa');
var Cat = require('./bb');
var mickey = new Mouse('black');
var jerry = new Mouse('yellow');

var tom  = new Cat();
tom.eat(mickey).eat(jerry);

console.log(tom);
