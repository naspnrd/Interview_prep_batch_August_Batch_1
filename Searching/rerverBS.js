function binarySearchReverseIterative(arr, key){
    let start = 0;
    let end = arr.length - 1
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] == key)
            return mid;
        if(arr[mid] > key)
            start = mid + 1;
        else
            end = mid - 1;
        console.log(" start = ", start, " mid = ", mid, " end = ", end)
    }
    return -1;
}
//      0 1 2 3 4 5 6
arr = [10,8,5,4,3,2,1]
key = 3
console.log(binarySearchReverseIterative(arr,key))