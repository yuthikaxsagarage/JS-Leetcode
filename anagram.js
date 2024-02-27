

// using frequenct counter pattern
var anagram = function (A, B) {

    let obj1 = {};
    let obj2 = {};

    for (let element of A) {    
        obj1[element] ? obj1[element]++ : obj1[element] = 1;
        
    }
    for (let element of B) {    
        obj2[element] ? obj2[element]++ : obj2[element] = 1;
        
    }
   
    for (let key in obj1) {
        console.log(obj1[key], obj2[key], key)
        if (!(key in obj2)) {
            return false;
        }
       
        if (obj1[key] !== obj2[key]) {
            return false;
        }        
        
    }
    return true;
    
}

    


console.log(anagram("pasas", "asasp"));