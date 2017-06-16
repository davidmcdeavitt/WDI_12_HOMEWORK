var savingsAccount = {
  balance = 10000000
}

var accounts = {
  savings: {

  }

  checking: {
    balance :1098209182
  }
}
//modular pattern
var createAccount =
  function () {


  var balance = startingBalance;
  var name = name;
  var newAccount = {

  getName: function () {
    return name;
  },
  deposit: function (amount) {
    balance + amount
  }
}

  return newAccount

  }

var dtAccount = createAccount()

// dtAccount.balance = 'sdfsf'
