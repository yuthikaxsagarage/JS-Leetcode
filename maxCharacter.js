
let character = "aaabbbx";

//charMap

let x = {};
character.split('');

for (let i = 0 ; i < character.length; i ++){

if(Object.keys(x).includes(character[i])){
    x[character[i]] ++;

}else{
    x[character[i]] = 1;
}

}
console.log(x)

let max = 0;
let m = ''
for(i = 0; i < Object.values(x).length ; i ++){

    if(Object.values(x)[i] > max){
        max = Object.values(x)[i];
        m = Object.keys(x)[i]
    }
    

}
console.log(m)