//capitalize first letters
let x = "i am boRed";

const lowerArray = x.toLowerCase().split(' ');

let y = [];
for(words of lowerArray){
    y.push(words.substring(0,1).toUpperCase() + words.substring(1, words.length));
}


console.log(y)