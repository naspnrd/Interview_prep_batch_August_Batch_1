// iterative
function binarySearchIterative(arr, key){
    let start = 0;
    let end = arr.length - 1
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] == key)
            return mid;
        if(arr[mid] > key)
            end = mid - 1;
        else
            start = mid + 1;
        console.log(" start = ", start, " mid = ", mid, " end = ", end)
    }
    return -1;
}

// recursive function
function binarySearchRecursive(arr, key, start, end){
    // base conditon
    if(start > end)
        return  -1;
    let mid = Math.floor((start + end) / 2)
    if(arr[mid] == key)
        return mid;
    if(arr[mid] > key)
        return binarySearchRecursive(arr, key, start, mid - 1);
    else
        return binarySearchRecursive(arr, key, mid + 1, end);
    // console.log(" start = ", start, " mid = ", mid, " end = ", end);
}
//     0 1 2 3 4   5  6  7
arr = [3,5,6,8,10,11,13,16]
key = 16
console.log(binarySearchRecursive(arr,key, 0 , arr.length - 1))

// TC = O(n)
// SC = O(1)