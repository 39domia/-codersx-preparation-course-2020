var currencySymbol = "$";

function showMoney(amount) {
    var currencySymbol = "€";
    // console.log(amount + currencySymbol);
      return currencySymbol + amount;
}

console.log(showMoney(100));