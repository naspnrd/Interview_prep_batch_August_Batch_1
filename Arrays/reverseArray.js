    // 0 1 2 3
arr = [1,2,4,5] // 4
// temp = []
// j = 0
// for(i = arr.length - 1; i >= 0; i--){
//     //  temp.push(arr[i])
//     temp[j] = arr[i]
//     j++;
// }
// console.log(temp)

// TC = O(n)
// Space = O(n)

i = 0
j = arr.length - 1
while(i <= j){
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr)

// TC = O(n/2) => O(n)
// Space = O(1)