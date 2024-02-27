var missingNumber = function(nums) {
    let smallestPositiveNumber = 0;    
    
    const B = nums.filter((e) => e >= 0);

    for (let i = 0; i < nums.length; i++){

        if (!nums.includes(smallestPositiveNumber) && smallestPositiveNumber < nums[i]) {
            return smallestPositiveNumber;
        } else {
            if (!B.includes(B[i] + 1) && B[i] >= 0) {
                smallestPositiveNumber = B[i] + 1;
                if (smallestPositiveNumber > B[i] + 1) {
                    smallestPositiveNumber = B[i] + 1;
                }
                   
            }               
            
        }            
        
    }
    return smallestPositiveNumber;
    
}
    


console.log(missingNumber([0,1,2,3]));
