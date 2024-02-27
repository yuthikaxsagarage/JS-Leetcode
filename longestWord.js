const sentence = "Hello there i am yuthika";

let x = sentence.split(' ');

let y = {};
for(i = 0; i < x.length; i ++){

    y[x[i]] = x[i].split('').length
}

let max = 0;
let m;

for(s in y){
    console.log(s.split('').length, max)

    if(s.split('').length > max){
       max = s.split('').length
       m = s
    }


}
console.log(m)