var str="ABCDCBA";
// Method - 1
// var rev="";
// for(let i = str.length-1; i >= 0; i--)
// {
//     rev += str[i];
// }
// if(rev===str)
//     console.log("palindrome");
// else
//     console.log("Not a palindrome");

// TC = O(n)
// SC = O(n)

//Method - 2
left = 0
right = str.length - 1
flag = true
while(left < right){
    if(str[left] != str[right]){
        flag = false
        break
    }
    left++
    right--
}
if(flag == true)
    console.log(str + " Is a palindrome")
else
    console.log(str + " Is a not palindrome")

// TC = O(n/2) = O(n)
// SC = O(1)