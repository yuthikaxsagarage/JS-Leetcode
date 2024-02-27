// has to be sorted
// multiple pointers pattern
function countUniqueValues(A) {
    // how many unique values , in this case 1,2,3 that is 3, not the not duplicates

    let first = 0; // beginning index
    let second = 1; // index at hte end
   
    while (second < A.length) {
        console.log(A[first], A[second])
        if (A[first] !== A[second]) {
            second++
            first ++          
        } else {
            A.splice(first, 1);                   
        }        
    
    }
   
    return A.length;

}




console.log(countUniqueValues([1,2,2,3,3,3,4,5]))