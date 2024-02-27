// max subarray summation
function subarray(A, num) {

    let maxSum = 0;
    let tempSum = 0;
    if (A.length < num) return null
    
    for (let i = 0; i < num; i++){
        maxSum = maxSum + A[i]
    }
    // this gives first set of sum here it's 1+2+3
    tempSum = maxSum;
    for (let i = num; i < A.length; i++){
        tempSum = tempSum - A[i - num] + A[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }

    }
    return maxSum;

   
}

console.log(subarray([1,2,3,42342,3,24,2,432,2], 3))