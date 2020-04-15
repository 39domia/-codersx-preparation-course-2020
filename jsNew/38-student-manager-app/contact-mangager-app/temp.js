var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish.splice(2, 0)); // chèn 'drum' vào vị trí 2
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

// myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
// myFish is ["angel", "clown","mandarin", "sturgeon"]
console.log(myFish);