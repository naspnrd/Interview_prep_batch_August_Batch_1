var arr = [0,1,0,1,0,1]
console.log("Before sorting = ", arr)
function sort0and1_Method1(arr){
    let n = arr.length;
    let count0 = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] == 0)
            count0++;
    }
    console.log(count0);
    for(let i = 0; i < count0; i++)
        arr[i] = 0;
    let count1 = n - count0;
    for(let i = count1; i < n; i++)
        arr[i] = 1;
    console.log("After Sorting = ", arr)
}
// sort0and1_Method1(arr);
// Method 1
// TC = O(n)
// SC = O(1)

function sort0and1_Method2(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        while(arr[left] == 0 && left < right)
            left++;
        while(arr[right] == 1 && left < right)
            right--;
        // if left is smaller than rigjht that means
        // left is pointing to 1 and right is pointing 0
        if(left < right){
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    console.log("After Sorting = ", arr)
}
sort0and1_Method2(arr)