var str = "Welcome to this course!"
// step - 1
// var splitStr = str.split("")
// console.log(splitStr)
// // step - 2
// var revStr = splitStr.reverse()
// console.log(revStr)
// // step -3
// var newStr = revStr.join("")
// console.log(newStr)
// console.log(str.split("").reverse().join(""))
// tc = O(n)
// sc = O(n)

// Method - 2
var splitStr = str.split("")
output = []
for(i = splitStr.length - 1; i >= 0; i--){
    output.push(splitStr[i])
}
res = output.join("")
console.log(res)
// TC = O(N)
// SC = O(N)