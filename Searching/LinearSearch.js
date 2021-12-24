function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key)
            return i;
    }
    return -1;
}
//         0 1 2 3 4 5 6 7 8
var arr = [1,2,8,3,5,4,0,9,6]
var key = 7 //6 //0 //1
console.log(linearSearch(arr, key))


// TC = O(n)
// SC = O(1)