    let s= "a"
    let n = 1000000;

    let letter = 'a';

    let q = s.split('');
    let y = q.reduce((total, e ) => {
        if(e == letter){
            return total= total + 1;
        }else{
            return total;
        }
      
    }, 0)    
    
    let extraChars = n % (s.length);
    let repeats = parseInt(n / (s.length))
    let total = y*repeats;

    let xChars = q.slice(0, extraChars)
    
    let z = xChars.reduce((total, e ) => {
        if(e == letter){
            return total= total + 1;
        }else{
            return total;
        }
      
    }, 0) 
 
    console.log(total + z)


