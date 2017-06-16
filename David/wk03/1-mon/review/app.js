
var balance = 0;///souce of truth
// function deposit() {
//   balance = balance + 50;
// }

var deposit = function(amount) {
  balance = balance + amount;
}

var withdraw = function(amount) {
  balance = balance - amount;
}
//----------------------this is the bank
//CREATE THE BUTTON
// DOM API
//whole point is to mess with DOM to get what you want
//step 1
var balanceDiv = document.querySelector('div');//caching the div
//step 2
var amountInput = document.querySelector('.amount');//caching the input box
//step 4
var depositButton = document.querySelector('button');
//add event listener

//show initial balance and update

//INDIVIDUAL--->WHAT I WANT TO DO
//step 3
balanceDiv.textContent = balance //sandwhich using the single souce of truth
//show the initial balance
//want to run the deposit function with this but we wont want to deposit yet
//when button is clicked
//step 4
depositButton.addEventListener('click', function() {
  //long way to write this
  // var amountAsNumber = Number(amountInput.value)
  // deposit(amountAsNumber)
  deposit(Number(amountInput.value))
  //update the textContent balance div with the new balance
  balanceDiv.textContent = balance
  return amountInput.value = "";
});
//step 2
// deposit(amountInput.value)
