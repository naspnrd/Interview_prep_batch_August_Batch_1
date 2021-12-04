base = 15
exp = 10
res = 1
while(exp > 0){
    res = res*base
    exp--;
}
// for(i = exp; i > 0; i--){
//     res = res*base
// }
console.log(res)
// TC = O(exp)
// Space = O(1)