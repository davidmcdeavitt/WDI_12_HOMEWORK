

//a list of items

var list = [2,4,5,1,8,5,2];

function findFirstRepeatedItem(array) {

    for (let i = 0; i < arr.length; i++) {
        for (let j=i +1; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }

 console.log('no repetition found');
}

console.log( findFirstRepeatedItem(list) )
