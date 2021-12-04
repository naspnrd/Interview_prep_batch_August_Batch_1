function printDuplicates(str){
    count = {}
    for(i = 0; i < str.length; i++){
        //          a
        if(!count[str[i]]){
            count[str[i]] = 1 // a : 1 // b : 1 // c : 1
        }
        else
            count[str[i]] = count[str[i]] + 1 // a : 2 // c : 2
        console.log(count)
    }
    // console.log(count)
    for(var i in count){
        //  5 > 1
        if(count[i] > 1)
            console.log(i + " : " + count[i]);
    }
}
//     0123456
str = "aabccdefggfjlskaaafgknsmov"
printDuplicates(str)