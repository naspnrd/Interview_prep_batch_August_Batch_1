function insertionSort(arr){
    // for iterating each item
    for(i = 0; i < arr.length; i++){
        idx = i;
        //                     0 - 1 = -1
        while(idx > 0 && arr[idx - 1] > arr[idx]){
            [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]] // swapping
            console.log("after i = ", i, " = ", arr);
            idx -= 1;
        }
    }
    console.log("After sorting = ", arr);
}
// define
arr = [8,3,2,7,9,1,4]
// arr = [6,5,4,3,2,1]
// arr = [1,2,3,4,5]
console.log("Before Sorting = ", arr)
insertionSort(arr)

// in worst case
// TC = O(n2)
// SC = O(1)

// in best case

// TC = O(n)
// SC = O(1)

// in average case
// TC = O(n2)
// SC = O(1)