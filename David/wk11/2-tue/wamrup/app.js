const PORT = 3000;


var express = require('express');
var app = express();
var request = require('request');

var map = {
    customer: 'customers',
     customer: {
            product: "product",
            unitPrice: "unitPrice",
            units: "units",
            totalPrice: "totalPrice"
        }
    ]
}





app.listen(PORT, function() {
    console.log(`server listening on port: ${PORT}`)
})