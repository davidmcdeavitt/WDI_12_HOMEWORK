var cards = ["2 hearts", "2 diamonds", "2 spades", "2 clubs",
            "3 hearts", "3 diamonds", "3 spades", "3 clubs",
            "4 hearts", "4 diamonds", "4 spades", "4 clubs",
            "5 hearts", "5 diamonds", "5 spades", "5 clubs",
            "6 hearts", "6 diamonds", "6 spades", "6 clubs",
            "7 hearts", "7 diamonds", "7 spades", "7 clubs",
            "8 hearts", "8 diamonds", "8 spades", "8 clubs",
            "9 hearts", "9 diamonds", "9 spades", "9 clubs",
            "10 hearts", "10 diamonds", "10 spades", "10 clubs",
            "queen hearts", "queen diamonds", "queen spades", "queen clubs",
            "king hearts", "king diamonds", "king spades", "king clubs",
            "jack hearts", "jack diamonds", "jack spades", "jack clubs",];

function randomCard(cards){
    var randomNumber = Math.floor(Math.random()*cards.length);
    var cardReturn = cards.splice(randomNumber,1);
    cards.push(cardReturn);
};



