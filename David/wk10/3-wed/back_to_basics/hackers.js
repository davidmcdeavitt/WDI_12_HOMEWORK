const hackers = [{
    name: 'kit',
    dangerous: false,
    bankBalance: 2000
},  {
    name: 'javed',
    dangerous: false,
    bankBalance: 3200
},  {
    name: 'sam',
    dangerous: true,
    bankBalance: 7900
},  {
    name: 'andrian',
    dangerous: true,
    bankBalance: 9500
},  {

}];
var total = hackers
    .filter(function(){
        return hackers.dangerous === true;
    })
    .map(function(){
        return hackers.bankBalance * 1.1
    })
    .reduce(function(total, value){
        return total + value
    })


var total = hackers
    .filter(hacker => hacker.dangerous === true)
    .map(hacker => hacker.bankBalance * 1.1)
    .reduce(total, value) => {
        return total, value
    })

function isDangerous(hacker) {
    return hacker.dangerous === true
}
function balanceWithGST(hacker) {
    return hacker.bankBalance * 1.1;
}

function sum(total, val){
    return total + val
}

var total = hackers
    .filter(isDangerous)
    .map(balanceWithGST)
    .filter(sum)