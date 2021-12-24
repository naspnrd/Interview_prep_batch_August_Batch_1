function ceil(arr, target){
    start = 0;
    end = arr.length;
    res = Number.MAX_VALUE;
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        console.log(" start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
        if(arr[mid] == target)
            return arr[mid];
        if(arr[mid] > target)
        {
            end = mid - 1;
            res = Math.min(res, arr[mid]);
        }
        else
            start = mid + 1;
        console.log(" start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
    }
    return res;
}
//     0 1 2 3 4 5  6  7
arr = [1,2,3,10,10,12]
target = 8
console.log("Ceil of ", target, " is ", ceil(arr, target));

// TC = O(logn)
// SC = O(1)