function subSetOfAnotherArr(ar1, ar2){
let m =ar1.length;
let n =ar2.length;

for(var r=0; r<n; r++){
    for(var j=0; j<m; j++)
    if(ar2[r]==ar1[j])
    break;

    if(j==m)
    return false
}
return true
}

subSetOfAnotherArr([11, 1, 13, 21, 3, 7], [11, 3, 7, 1])  //==> true