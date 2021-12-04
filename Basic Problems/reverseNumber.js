num = 1234
temp = num
rev_num = 0
while(num > 0){
    digit = num % 10 // 1234 % 10 = 4
    rev_num = rev_num * 10 + digit
    num = Math.floor(num / 10) // 123.4 
}

console.log("before reverse = " + temp , "After reverse = " + rev_num)