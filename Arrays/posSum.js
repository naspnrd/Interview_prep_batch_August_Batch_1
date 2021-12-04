var arr = [-1,2,3,-4,-6,8,9,0]
sum = 0
for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) // -4 % 2 == 0
        sum = sum + Math.abs(arr[i]) // 2 + 8 -4 - 6
}
console.log(sum)

//TC = O(n)
// SC = O(1)