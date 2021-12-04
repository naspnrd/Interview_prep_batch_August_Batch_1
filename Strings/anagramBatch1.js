// Method - 1 => Sorting
function isAnagram1(str1, str2){
    n1 = str1.length
    n2 = str2.length
    if(n1 != n2)
        return false;
    console.log("Before sorting string 1 = ", str1)
    console.log("Before sorting string 2 = ", str2)
    str1 = str1.split('') // array // O(n1)
    str2 = str2.split('') // array // O(n1)
    str1.sort() // n1logn1
    str2.sort() // n1logn1
    console.log("str1 =", str1)
    str1 = str1.join('') // O(n1)
    str2 = str2.join('') // O(n1)
    console.log("After sorting string 1 = ", str1)
    console.log("After sorting string 2 = ", str2)

    // compare these strings
    //O(n1)
    for(i = 0; i < n1; i++){
        if(str1[i] != str2[i])
            return false;
    }
    return true
}
function isAnagram2(str1, str2){
    n1 = str1.length
    n2 = str2.length
    // important condition
    if(n1 != n2)
        return false;
    count = {} // total alphabets = 26
    for(i = 0; i < n1; i++){
        if(!count[str1[i]])
            count[str1[i]] = 1
        else
            count[str1[i]]++
    }
    console.log(count)
    for(i = 0; i < n2; i++){
        if(!count[str2[i]])
            return false
        else
            count[str2[i]]--
    }
    console.log(count)
    return true
}
str1 = "aacdb"
str2 = "bacd"

res = isAnagram2(str1, str2)

if(res == true)
    console.log("Strings are Anagrams")
else
    console.log("Strings are not Anagrams")

// Method - 1 
// TC = O(5n1) + O(2n1logn1) => O(n1logn1) 
// SC = O(1)

// Method - 2
// TC = O(2n1) => O(n1)
// SC = O(1)