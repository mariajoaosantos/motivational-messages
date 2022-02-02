const quotes = require('./quotesdb')

function randomMessage() {
let rand1 = Math.floor(Math.random()*quotes.piece1.length);
let rand2 = Math.floor(Math.random()*quotes.piece2.length);
let rand3 = Math.floor(Math.random()*quotes.piece3.length);
return console.log(quotes.piece1[rand1] + '\n' + quotes.piece2[rand2] + '\n' + quotes.piece3[rand3])
};

randomMessage()
