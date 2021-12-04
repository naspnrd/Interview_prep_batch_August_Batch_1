num = 28
sum = 0
for(i = 1; i <= Math.floor(num/2); i++){
    if(num % i == 0)
        sum = sum + i
}

if(sum == num)
    console.log(num + " is a perfect number")
else
    console.log(num + " is not a perfect number")

//TC = O(num/2) = O(num)
//Space = O(1)