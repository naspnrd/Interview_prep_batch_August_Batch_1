function partition(arr, start, end){
    var pivot = arr[end];
    pIndex = start;
    for(let i = start; i < end; i++){
        if(arr[i] <= pivot){
            let tmp = arr[i];
            arr[i] = arr[pIndex];
            arr[pIndex] = tmp;
            pIndex += 1;
        }
    }
    let tmp = arr[end];
    arr[end] = arr[pIndex];
    arr[pIndex] = tmp;
    return pIndex;
}
function quickSort(arr, start, end){
    if(start < end){
        var pivot = partition(arr, start, end); // index
        console.log("pivot element = ", arr[pivot], " and it's index = ", pivot);
        console.log("After partitioning = ", arr.slice(0, arr.length));
        // left part
        quickSort(arr, start,pivot - 1);
        // right part
        quickSort(arr, pivot + 1, end);
    }
}

// var arr = [7,2,1,6,8,5,3,4];
var arr = [1,2,3,4,5]
console.log("Before sorting = ", arr);
quickSort(arr, 0, arr.length - 1);
console.log("After sorting = ", arr);