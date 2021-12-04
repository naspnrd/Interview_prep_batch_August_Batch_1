num = 5351
temp = num
rev_num = 0
while(num > 0){
    digit = num % 10 // 1234 % 10 = 4
    rev_num = rev_num * 10 + digit
    num = Math.floor(num / 10) // 123.4 
}

if(temp == rev_num)
    console.log(temp + " is a palindrome")
else    
    console.log(temp + " is not a palindrome")

// TC = O(log num) // base 10
// Space = O(1)