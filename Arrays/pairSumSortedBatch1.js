// Method - 1 Brute Force Solution
var arr = [2,3,4]
target = 8
n = arr.length
ans = []
// for(i = 0; i < n; i++){
//     for(j = 0; j < n; j++){
//         if(i != j && arr[i] + arr[j] == target){
//             ans.push(arr[i])
//             ans.push(arr[j])
//             break;
//         }
//     }
//     if(ans.length)
//         break;
// }
// if(ans.length)
//     console.log(ans)
// else
//     console.log(-1)

// // TC = O(n*n)
// // SC = O(1)

// Method - 2 Two Pointer Method
i = 0
j = n - 1
while(i < j){
    if(arr[i] + arr[j] == target){
        ans.push(arr[i])
        ans.push(arr[j])
        break
    }
    if(arr[i] + arr[j] > target)
        j--; // move to left
    else
        i++; // move to right
} 

if(ans.length)
    console.log(ans)
else
    console.log(-1)

// TC =O(n)
// SC = O(1)