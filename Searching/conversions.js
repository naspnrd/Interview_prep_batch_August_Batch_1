var binary = "1010"
// var octal = "724"
// // to convert from any conversion to decimal
// // console.log(parseInt(octal, 8));

// // toString
// num = 10
// console.log(num.toString(16))


// function
function binaryToDecimal(binary){
    var n = binary.length;
    var num = 0
    let i = 0;
    for(let j = n-1; j >= 0; j--){
        num = num + Math.pow(2,i)*binary[j]
        i++;
    }
    console.log(num)
}
binaryToDecimal(binary)