// write a command line program to count the number of lines in a file

var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lineCount = buffer.toString().split('/n').length;
console.log(lineCount - 1);