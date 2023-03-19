function longConzSubarr(arr){
    
    let sArr=arr.sort((a,b)=>a-b)
    let curr=1;
    let long=0;
    
    for(var r=1; r<sArr.length; r++){
        if(sArr[r]!=sArr[r-1]){
            if(sArr[r]==sArr[r-1]+1){
                curr++;
            }
            else{
                long=Math.max(curr,long);
                curr=1;
            }
        }
        long=Math.max(curr,long)
    }
    return long;
}

console.log(longConzSubarr([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]))