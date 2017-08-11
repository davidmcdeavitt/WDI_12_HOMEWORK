// fs file system/librar/api

var fs = require('fs');

var buffer = fs.readFileSync('ex1.js');

console.log(buffer.toString());