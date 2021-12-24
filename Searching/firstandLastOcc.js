function searchRange(nums, target){
    let first = -1, last = -1;
    first = firstOcc(nums, target); // logn
    last = lastOcc(nums, target); // logn
    // total
    count = last - first + 1;
    console.log("first occurrence ", first, " last occurrence = ", last, " count = ", count);
}
function firstOcc(nums, target){
    start = 0;
    end = nums.length - 1;
    res = -1;
    while(start <= end){
        mid = Math.floor((start + end)/2);
        if(nums[mid] == target){
            res = mid;
            end = mid - 1;
        }
        else if(nums[mid] > target)
            end = mid - 1;
        else
            start = mid + 1;
    }
    return res;
}

function lastOcc(nums, target){
    start = 0;
    end = nums.length - 1;
    res = -1;
    while(start <= end){
        mid = Math.floor((start + end)/ 2);
        if(nums[mid] == target){
            res = mid;
            start = mid + 1;
        }
        else if(nums[mid] > target){
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return res;
}
//      0  1   2  3   4   5   6
nums = [2, 4, 10, 10, 10, 18, 20]
target = 10

searchRange(nums, target);

// TC = O(2logn) = O(logn)
// SC = O(1)