// write a command line wprogram that sums numbers
//$ node ex3.js 1 2 3 
//$ 6

console.log(process.argv)

var total = 0;

for (var = 2; i < process.argv.length; i++) {
    total += Number(processs.argv[i]);
}



console.log(total);