
function Account(name, balance){
  this.name = name;
  this.balance = balance;
}
//access any instance property
// var account = new Account('Hey', 100);
// console.log(account.name);

// need code to make sure the amount is positive first
// var data = [1,2,3,4,5];
// var sum = 0;
// data.forEach(function(value) {
//     sum += value;
// });
// sum = ?

var isPositive =
  if (amount > -1) {
  return(amount)
} else {
  return("Insufficient Funds")
}

//console.info this gives a list of javascript objects to input
Account.prototype.deposit = function(amount) {
  if (this.isPositive(amount)) {
    this.balance += amount;
    console.info(`Deposit: ${this.name} new balance is ${this.baance}`);
    return true;
  }else {
    return false;
  }
};
///now have to do is
Account.prototype.withdrawal = function(amount) {

}
