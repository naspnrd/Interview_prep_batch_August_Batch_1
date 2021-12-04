arr = [1,4,5,6,2,46,7,9,12,11]
even = []
odd = []
sum = 0
for(i = 0; i< 10; i++){
    sum = sum + arr[i]
    if(arr[i] % 2 == 0)
        // console.log("even = ", arr[i])
        even.push(arr[i])
    else
        // console.log("odd = " , arr[i])
        odd.push(arr[i])
}
console.log("arr =", arr)
console.log("even = ", even)
console.log("odd = ", odd)
console.log("sum = " ,sum)
console.log("Average = ", sum/10)