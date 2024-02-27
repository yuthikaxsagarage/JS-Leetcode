const stringName = "aoijas" ;

let x = stringName.split('')

//////////////////////////////////////////
// let reverseX = [];
// for(let i = x.length; i > -1; i--){
//     reverseX.push(x[i])
    
// }
///////////////////////////////////////////

// const Rstring = reverseX.join().replace(/[,]+/g, '');
// or you can reverse

// const Rstring = x.reverse().join('');

//////////////////////////////////////////
// let Rstring = '';
// for(let char of x){
//     Rstring = char + Rstring;
// }
////////////////////////////////////////// 

let Rstring = '';
Rstring = x.reduce(((Reverse , char) => char + Reverse ), '' );
console.log(Rstring);