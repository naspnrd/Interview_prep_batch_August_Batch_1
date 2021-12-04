function moveZeroes1(arr){
    ans = []
    count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] != 0)
            ans.push(arr[i])
        else
            count++
    }
    while(count--)
        ans.push(0)
    console.log("After Moving Zeros = ", ans)
}

//Method - 2
function moveZeroes2(arr){
    j = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arr[j] = arr[i]
            j++
        }
    }
    while(j < arr.length){
        arr[j] = 0
        j++
    }
    console.log("After moving Zeros = ", arr)
}
arr = [1,8,3,0,2,0,1,10,0]
console.log("Before Moving Zeros = ", arr)
moveZeroes2(arr)