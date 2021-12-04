function removeSpace(arr){
    count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] != " "){
            arr[count] = arr[i]
            count++
        }
    }
    return count
}

var str = "All is well"
var arr = str.split("")
var i = removeSpace(arr)
console.log(arr.join("").substring(0, i))

// TC = O(n)
// Sc = O(n)