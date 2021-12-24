function floor(arr, target){
    start = 0;
    end = arr.length;
    res = 0; // natural numbers in array
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        console.log(" start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
        if(arr[mid] == target)
            return arr[mid];
        if(arr[mid] > target)
            end = mid - 1;
        else{
            res = Math.max(res, arr[mid]);
            start = mid + 1;
        }
        console.log(" start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
    }
    return res;
}
//     0 1 2 3 4 5  6  7
arr = [1,2,3,4,8,10,10,12]
target = 10
console.log("Floor of ", target, " is ", floor(arr, target));