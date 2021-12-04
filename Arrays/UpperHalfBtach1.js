var arr =[[2,3,1,5,0],
          [7,1,5,3,1],
          [2,5,7,8,1],
          [0,1,5,0,1],
          [3,4,9,1,5] 
         ]
N = 5
for(i = 0; i < N; i++){
    s = ''
    //n
    for(k = 0; k < i; k++)
        s = s + " "
    //n
    for(j = i; j < N; j++){
        s = s + arr[i][j];
    }
    console.log(s)
}
// n(n+n) = O(2*n*n)
// TC = O(n*n)
// SC = O(n)