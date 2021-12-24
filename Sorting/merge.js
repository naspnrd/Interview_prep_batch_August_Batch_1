a = [1,3,5,12,14,15]
b = [2,4,6,10,18,20]
console.log("a = ", a)
console.log("b = ", b)
n = a.length
m = b.length
c = []
i = 0
j = 0;
while(i < n && j < m){
    if(a[i] > b[j]){
        c.push(b[j]);
        j++;
    }
    else{
        c.push(a[i]);
        i++;
    }
}
while(i < n){
    c.push(a[i])
    i++
}
while(j < m){
    c.push(b[j]);
    j++;
}

console.log("c = ", c)

// TC = O(n+m)
// SC = O(n+m)