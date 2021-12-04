num = 1531
function order(num){
    count = 0
    while(num > 0){
        count++
        num = Math.floor(num / 10)
    }
    return count
}
function power(base, exp){
    res = 1
    while(exp > 0){
        res = res * base
        exp--
    }
    return res
}

function isArmstrong(num){
    digit = order(num) // 3 // o(log num) ?
    console.log("number of digit = " + digit)
    temp = num
    sum = 0
    while(temp > 0){ // log (temp) * O(exp)
        dig = temp % 10 // 3 // 5 // 1 
        console.log("digits = " + dig)
        sum = sum + power(dig, digit) // sum = 0 + power(1, 3) // 125 + 27 // 152 // 152 + 1 // 153
        console.log("sum = ", sum)
        temp = Math.floor(temp / 10) // 153/ 10 = 15 // 15/10 = 1  // 1/ 10
        console.log("temp = " + temp)
    } 
    if(sum == num)
        console.log(num + " is an armstrong number")
    else   
        console.log(num + " is not an armstrong number")
}

//call function
isArmstrong(num)
//TC =  o(log num + log (temp) * O(exp)) = O(log(temp)*O(exp))

// Space = O(1)