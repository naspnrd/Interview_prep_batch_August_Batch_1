str = "The quick brown fox jumps over the lazy dog"
// str = "aabcedfg....z"
str = str.toLowerCase()
// Method - 1
// count = {}
// for(i = 0; i < str.length; i++){
//     if(str[i] == " ")
//         continue
//     if(!count[str[i]])
//         count[str[i]] = 1
//     else
//         count[str[i]]++
// }
// console.log(Object.keys(count).length)
// if(Object.keys(count).length == 26)
//     console.log(str + " is a pangram")
// else
//     console.log(str + " is not a pangram")


// TC = O(n)
// SC = O(1)

// Method - 2
var letters = 'abcdefghijklmnopqrstuvwxyz'
flag = true
for(i = 0; i < 26; i++){
    if(str.indexOf(letters[i]) < 0){
        flag = false
        break;
    }
}

if(flag == true)
    console.log(str + " is a pangram")
else
    console.log(str + " is not a pangram")

// TC = O(26n) => O(n)
// SC = O(1)