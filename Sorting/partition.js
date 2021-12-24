var arr = [7,2,1,6,8,5,3,4];
console.log("before partioning = ", arr);
var n = arr.length;
var pivot = arr[n-1]; //last element;
var pIndex = 0;
for(let i = 0; i < n-1; i++){
    if(arr[i] <= pivot){
        //swap a,b = b,a;
        let tmp = arr[i];
        arr[i] = arr[pIndex];
        arr[pIndex] = tmp;
        pIndex++;
        console.log("After swapping = ", arr);
    }
}
console.log("swap pivot")
let tmp = arr[n-1];
arr[n-1] = arr[pIndex];
arr[pIndex] = tmp;
console.log("final result = ", arr);

// TC = O(n)
// SC = O(1)