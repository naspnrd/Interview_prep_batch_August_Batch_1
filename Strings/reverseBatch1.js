// Method - 1 Inbuilt methods ie split method and reverse method
var str = "Neeraj"
// step - 1 
// var splitStr = str.split("")
// console.log(splitStr)
// // step - 2
// var revStr = splitStr.reverse()
// console.log(revStr)
// // step - 3
// str = revStr.join("")

// console.log(str.split("").reverse().join(""))
// console.log(str)

// TC = O(n)
// SC = O(n)
// Method - 2
var revStr = ""
for(i = str.length - 1; i >= 0; i--)
    revStr += str[i]
console.log(revStr)

// TC = O(n)
// SC =O(n)