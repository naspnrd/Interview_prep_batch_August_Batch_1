var str = ['a', 'b', 'c', 'c', 'e', 'd']
count = {c : million} 
// for(i = 0; i < str.length; i++){
//     if(!count[str[i]])
//         count[str[i]] = 1
//     else
//         count[str[i]]++
// }
// console.log(count)

// maxValue = 1
// maxChar = str[0]
// for(var prop in count){
//     console.log("prop = ", prop)
//     if(count[prop] > maxValue){
//         maxValue = count[prop]
//         maxChar = prop
//     }
// }
maxValue = 1
maxChar = str[0]
for(i = 0; i < str.length; i++){
    if(!count[str[i]])
        count[str[i]] = 1
    else
        count[str[i]]++
    if(maxValue < count[str[i]]){
        maxValue = count[str[i]]
        maxChar = str[i]
    }
}
console.log(count)

console.log(maxChar)

// TC = O(n)
// SC = O(n)