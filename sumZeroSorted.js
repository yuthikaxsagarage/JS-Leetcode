
function sumZeroSorted(A){

    let left = 0; // beginning index
    let right = A.length - 1; // index at hte end

    while (left < right) {        
        let sum = A[left] + A[right];
        if (sum === 0) {
            return [A[left], A[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left ++
        }
    } 
}










console.log(sumZeroSorted([-4,-3,-2,-1,1,2,3]))