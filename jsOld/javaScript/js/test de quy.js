function sum(n) {
    console.log(n);
    if (n >= 1) {
        return sum(n - 1) + n;
    }


    return n;
}
console.log(sum(5));