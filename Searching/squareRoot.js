function sqrtX(x){
    if(x < 2)
        return x;
    start = 1;
    end = Math.floor(x/2);
    res = - 1;
    while(start <= end){
        // find middle element
        mid = Math.floor((start + end)/ 2);
        sqr = mid*mid
        console.log(" start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
        if(sqr == x)
            return mid;
        if(sqr > x)
            end = mid - 1;
        else{
            start = mid + 1;
            // if not a pefect square
            res = mid;
        }
        console.log(" start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
    }
    return res;
}

console.log(sqrtX(12))

// TC = O(logn)
// SC = O(1)