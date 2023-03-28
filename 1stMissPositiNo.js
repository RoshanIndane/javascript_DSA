function smallPositiveNo(arr){
    arr.sort((a,b)=>a-b)
    
    let ans=1;
    for(var r=0; r<arr.length; r++){
        if(arr[r]==ans){
            ans++;
        }
    }
    return ans;
}

console.log(smallPositiveNo([2, 3, 7, 6, 8, -1, -10, 15])) //=>>1