function encryptString(str){
    let ans = ""
    for(let i = 0; i < str.length;){
        let ch = str[i];
        let count = 0;
        let hex;
        // iterate until s[i] is equal to ch
        while(str[i] == ch && i < str.length){
            count++;
            i++;
        }
        // decrement i by 1
        // i--;
        console.log("count = ", count)
        console.log("i = ", i);
        // convert to hexadecimal
        hex = count.toString(16)
        console.log("hex =",hex)
        ans = ans + ch;
        ans = ans + hex;
        console.log("ans = ", ans);
    }
    ans = ans.split('').reverse().join('');
    console.log("encrypted string = ", ans);
}

// str = "aaaaaaaaaaabbc"; // 1c2bba
// str = "abc"; // 1c1b1a
encryptString(str);

// TC = O(n)
// SC = O(2n) = O(n)