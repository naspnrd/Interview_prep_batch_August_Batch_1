function missingLinear(nums){
    let i;
    for(i = 0; i < nums.length; i++){
        if(i != nums[i])
            return i;
    }
    return i;
}
// TC = O(n)
// SC = O(1)
function missingBinary(nums){
    start = 0;
    end = nums.length - 1
    while(start <= end){
        mid = Math.floor((end + start)/2);
        console.log(" start = ", start, " mid = ", mid, " end = ", end)
        if(nums[mid] == mid)
        // recur on right side
            start = mid + 1;
        else
        // recur on left side
            end = mid - 1;
        console.log(" start = ", start, " mid = ", mid, " end = ", end)
    }
    return start;
}
// TC = O(logn)
// SC = O(1)
//      0  1  2  3  4  5
nums = [0, 1, 2, 3, 4, 5]
console.log("smallest missing number = ", missingBinary(nums))