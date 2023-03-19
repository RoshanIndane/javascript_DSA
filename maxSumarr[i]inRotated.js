function maxSum(arr){
    let res=0;
    
    for(var r=0; r<arr.length; r++){
        let sum=0;
        for(let j=0; j<arr.length; j++){
            var index=(r+j)%arr.length;
            sum+=j*arr[index]
        }
        res=Math.max(res,sum)
    }
    return res;
}

console.log(maxSum([2,8,9,5,4,7,1]))  //=>>127
console.log(maxSum([8, 3, 1, 2]))  //=>>29