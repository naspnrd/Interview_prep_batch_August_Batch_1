var str1 = "geeks"
var str2 = "mae"
count ={}
for(i = 0; i < str2.length; i++){
    if(!count[str2[i]])
        count[str2[i]] = 1
    else
        count[str2[i]]++
}
console.log(count)
res = ""
for(i = 0; i< str1.length; i++){
    if(count[str1[i]]){
        continue
    }
    else
    res += str1[i]
}
console.log(res)