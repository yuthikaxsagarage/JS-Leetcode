
// write a function which takes in a string and returns counts of each character

function charCount(str) {
    //make object to return at end
    // loop over string for each character
    //if the char is alpha-nuimeric and is a key in the object add one to count
    // if the char is not in the object add it to object and set the value to 1
    //return object at the end

    let countObj = {};
    str.charCodeAt()// can be also set

    let a = str.toLowerCase().split('').filter((element) => (/[a-z0-9]/.test(element)))
    
    a.forEach(element => {
        
        //checking someting in a object for the key
        if (countObj[element]) {
            countObj[element] += 1;
        } else {    
            countObj[element] = 1;
        }
    });

    return countObj;
}

console.log(charCount("oiahsoido121233**&%*&&^"))