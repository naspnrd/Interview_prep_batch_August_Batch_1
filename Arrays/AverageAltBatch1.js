var arr=[1,2,3,4,5];
var sum=0;
var count=0;
for(let i=0;i<arr.length;i=i+2)
{
    sum+=arr[i]; // 1 + 3 + 5
    count++; // 1 + 1 + 1
}
console.log("sum = ", sum)
console.log("count = ", count)
avg=sum/count;
console.log("Average = ", avg);

// TC = O(n) 
// SC = O(1)