//pattern uses objects or sets to collect values/ frequencies of values
// this can avoid on^2 stuff
/*
write a function called same, which accepts two arrays the function should return true
 if every value in the array has it's corresponding value squared in the second array.
*/
/*

var sameSquared = function(A, B) {
    if (A.length === B.length) {
        let array = [];
        for (let i = 0; i < A.length; i++) {

            for (let x = 0; x < B.length; x++) {              
                let counter = 0;
                    if (B[x] === A[i] * A[i]) {
                        counter++;                        
                        if (counter === 1) {
                            B.splice(x,1)
                            break;
                        }
               }                
            }           
        }
        if (B.length === 0) {
            return true
        } else {
            return false;
        }
    }else {
        return false;
    }
    
}

*/

// two loops are way better than nested loops

var sameSquared = function (A, B) {
    
    let obj1 = {};
    let obj2 = {};


    for (let element of A){        
        obj1[element*element] ? obj1[element*element]++ : obj1[element*element] = 1;      
    }
    for (let element of B){        
        obj2[element] ? obj2[element]++ : obj2[element] = 1;      
    }

    // compare objects JSON.stringfy(obj) or Object.entries(obj).toString()
    // console.log(obj1, obj2)
    // if (Object.entries(obj1).sort().toString() === Object.entries(obj2).sort().toString()) {
    //     return true
    //     //0.079
    // }

    // better to loop through than using entries(obj).sort()

    for (let key in obj1) {

        // check if key square is a key in obj2
        if (!(key ** 2 in obj2)){
            return false
        }

        //check values of that particular key
        if (obj2[key ** 2] !== obj1[key]) {
            return false
        }
        return true
    }


    return false;
}

    


console.log(sameSquared([0,2,1,2], [0,1,4,4]));