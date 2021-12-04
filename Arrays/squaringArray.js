// function sortSqu(arr){
//     n = arr.length
//     for(i = 0; i < n; i++)
//         arr[i] = arr[i]*arr[i]
    
//     // by default sort method consider it as string 
//     // 25, 100 = > 100, 25 , Apple, Banana
//     console.log("squared", arr)
//     arr.sort(function(a,b){return a - b})
// }

// arr = [-6,-3,-1,2,4,5] 
// console.log("Before Squaring = ", arr)
// sortSqu(arr)
// console.log("After Squaring = ", arr)

// Method - 2

function sortSqu2(arr){
    left = 0
    n = arr.length
    right = n - 1
    var res = new Array(n)
    res.fill(0)
    for(i = n - 1; i >= 0; i--){
        if(Math.abs(arr[left]) > Math.abs(arr[right])){
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
arr = [-6,-3,-1,2,4,5] 
console.log("Before Squaring = ", arr)
res = sortSqu2(arr)
console.log("After Squaring = ", res)

// TC = O(n)
// SC = O(n)