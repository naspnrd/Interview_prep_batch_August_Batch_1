// Method - 1 Brute Force Approach
var arr = [-6,-3,-1,2,4,5]
// function sortSqu(arr){
//     // mapping
    
//     const b = arr.map(ele => ele * ele)

//     // for(i = 0; i < arr.length; i++)
//     //     arr[i] = arr[i] * arr[i]
//     b.sort(function(a,b){return a - b})
//     return b
// }

// console.log("Before Squaring = ", arr)
// arr = sortSqu(arr)
// console.log("After Squaring = ", arr)

// Method - 2
function sortSquare2(arr){
    left = 0
    right = arr.length - 1
    res = new Array(arr.length)
    res.fill(0)
    for(i = arr.length - 1; i >= 0; i--){
        if(Math.abs(arr[left]) >= Math.abs(arr[right])){
            res[i] = arr[left] * arr[left]
            left++
        }
        else{
            res[i] = arr[right] * arr[right]
            right--
        }
    }
    return res;
}
console.log("Before Squaring = ", arr)
arr = sortSquare2(arr)
console.log("After Squaring = ", arr)

// TC = O(n)
// SC = O(n)