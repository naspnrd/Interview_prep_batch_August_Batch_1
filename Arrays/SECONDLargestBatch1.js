arr = [1,3,35,4,6]
let largest = Number.MIN_VALUE;
let secondlargest = Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++){
    //case 1
    if(arr[i] > largest){
        secondlargest = largest
        largest = arr[i]
    }
    // case 2 => if current element lies in between largest and secondlargest
    if(arr[i] != largest && arr[i] > secondlargest)
        secondlargest = arr[i]
}
console.log("largest = ", largest)
if(secondlargest == Number.MIN_VALUE)
    console.log("No second Largest")
else
    console.log("Second largest = " , secondlargest);

// TC = O(N)
// SC = O(1)
