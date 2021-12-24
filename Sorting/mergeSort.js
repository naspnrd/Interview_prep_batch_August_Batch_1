var arr = [3,7,1,8,2,5,9,4,6,10]
function merge(arr, startL, endL, startR, endR){
    let temp = []
    let i = startL;
    let j = startR;
    while(i <= endL && j <= endR){
        if(arr[i] > arr[j]){
            temp.push(arr[j]);
            j += 1;
        }
        else{
            temp.push(arr[i]);
            i += 1;
        }
    }
    while(i <= endL){
        temp.push(arr[i])
        i += 1;
    }
    while(j <= endR){
        temp.push(arr[j]);
        j += 1;
    }
    for(let i = 0; i < temp.length; i++)
        arr[startL + i] = temp[i];
}
function mergeSort(arr, start, end){
    if(start < end){
        console.log("Trying to sort = ", arr.slice(start, end + 1))
        // error was of scoping
        var mid = Math.floor((start + end) / 2);
        mergeSort(arr, start, mid); // left part
        mergeSort(arr, mid + 1, end); // right side
        console.log("Merging = ", arr.slice(start, mid + 1)," and ",arr.slice(mid+1, end+ 1))
        merge(arr, start, mid, mid + 1, end);
    }
}
console.log("before sorting = ", arr)
mergeSort(arr, 0, arr.length - 1)
console.log("after sortin = ", arr);