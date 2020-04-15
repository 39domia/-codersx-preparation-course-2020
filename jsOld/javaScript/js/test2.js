var mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight;
    }
};
function Mouse(weight) {
    this.type = 'mouse';
    this.age = 2;
    this.weight = weight;
}
let mouse1 = new Mouse(0.5);
let mouse2 = new Mouse(1);
console.log(mouse1);
console.log(mouse2);
// console.log(Mouse(0.5));
// console.log(mouse.getWeight());